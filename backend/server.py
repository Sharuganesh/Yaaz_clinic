from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
import asyncio
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

executor = ThreadPoolExecutor(max_workers=2)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

CLINIC_EMAIL = "YAAZHSPECIALITYCLINIC@gmail.com"
EMAIL_USER = os.environ.get('EMAIL_USER', '')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD', '')


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactInput(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str


def send_email_sync(name: str, email: str, phone: str, message: str) -> bool:
    if not EMAIL_USER or not EMAIL_PASSWORD:
        logger.info("Email not configured — message stored in DB only")
        return False
    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = CLINIC_EMAIL
        msg['Subject'] = f"New Contact Form: {name}"
        body = f"""New message from Yaazh Clinic website:\n
Name: {name}
Email: {email}
Phone: {phone or 'Not provided'}
Message: {message}
        """
        msg.attach(MIMEText(body, 'plain'))
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            server.sendmail(EMAIL_USER, CLINIC_EMAIL, msg.as_string())
        return True
    except Exception as e:
        logger.error(f"Email send failed: {e}")
        return False


@api_router.get("/")
async def root():
    return {"message": "Yaazh Speciality Clinic API"}


@api_router.post("/contact")
async def submit_contact(data: ContactInput):
    contact = ContactMessage(
        name=data.name,
        email=data.email,
        phone=data.phone,
        message=data.message
    )
    doc = contact.model_dump()
    await db.contact_messages.insert_one(doc)

    loop = asyncio.get_event_loop()
    email_sent = await loop.run_in_executor(
        executor, send_email_sync, data.name, data.email, data.phone or '', data.message
    )

    return {"success": True, "message": "Message received. We'll get back to you shortly.", "email_sent": email_sent}


@api_router.get("/contact")
async def get_contacts():
    messages = await db.contact_messages.find({}, {"_id": 0}).to_list(500)
    return messages


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
