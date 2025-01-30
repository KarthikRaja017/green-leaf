import datetime
import re
import time
from flask import request
from flask_restful import Resource
from twilio.rest import Client
import random
from root import mongo

from root.config import (
    MAX_ATTEMPTS,
    OTP_EXPIRY_TIME,
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER,
)
from root.utilis import getUtcCurrentTime, uniqueId

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

mdb = mongo.db


def validate_phone_number(phone_number):
    pattern = r"^\+?[1-9]\d{1,14}$"
    return re.match(pattern, phone_number)


def send_sms(phoneNumber, otp):
    if not phoneNumber.startswith("+"):
        phoneNumber = f"+91{phoneNumber}"

    if not validate_phone_number(phoneNumber):
        return None

    message = client.messages.create(
        body=f"Your verification code is {otp}",
        from_=TWILIO_PHONE_NUMBER,
        to=phoneNumber,
    )

    return message.sid


def generate_otp():
    return random.randint(100000, 999999)


def maskMobile(value, ifEmpty=False):
    pattern = (
        "\s*(?:\+?(\d{1,3}))?[-. (]*(\d{2})[-. )]*(\d{5})[-. ]*(\d{3})(?: *x(\d+))?\s*"
    )
    result = re.findall(pattern, value)

    if len(result) > 0:
        result = result[0]

    if not (len(result) > 3):
        return ifEmpty

    return f"{result[1]}*****{result[3]}"


def is_otp_valid(otpData, verificationCode, phoneNumber):

    if otpData["otp"] != int(verificationCode):
        return {
            "status": 0,
            "class": "error",
            "message": "Oops! That OTP doesn't match. Double-check and try again! 🔍",
            "payload": {},
        }

    # Check if OTP has expired
    # current_time = time.time()
    # if current_time - otpData["timestamp"] > OTP_EXPIRY_TIME:
    #     return {
    #         "status": 0,
    #         "class": "error",
    #         "message": "OTP has expired. Please request a new one.",
    #         "payload": {},
    #     }

    # Check if OTP is tied to the correct phone number
    if otpData["phoneNumber"] != phoneNumber:
        return {
            "status": 0,
            "class": "error",
            "message": "Hmm... that phone number doesn't match the OTP. Check again! 📞",
            "payload": {},
        }

    # Check the number of attempts
    if otpData["attempts"] >= MAX_ATTEMPTS:
        return {
            "status": 0,
            "class": "error",
            "message": "Maximum attempts reached! Time to get a fresh OTP. 🔄",
            "payload": {},
        }

    return {
        "status": 1,
        "class": "success",
        "message": "OTP verified! You're all set to vibe! 🎉",
        "payload": {},
    }


class GenerateOtp(Resource):
    def post(self):
        inputData = request.get_json(silent=True)
        if not inputData or "phoneNumber" not in inputData:
            return {
                "status": 0,
                "class": "error",
                "message": "Uh-oh! We need your digits to keep the vibe going. 📱",
                "payload": {},
            }

        phoneNumber = inputData["phoneNumber"]

        if not validate_phone_number(phoneNumber):
            return {
                "status": 0,
                "class": "error",
                "message": f"Oops! {phoneNumber} doesn't seem right. Check the number and try again! 📲",
                "payload": {},
            }

        # Generate OTP
        otp = generate_otp()
        currentTime = getUtcCurrentTime()

        otpRequest = {
            "_id": uniqueId(digit=5, isNum=False, prefix=f"M"),
            "phoneNumber": phoneNumber,
            "otp": otp,
            # 'timestamp': datetime.datetime.now(),
            # "createdAt": currentTime,
            "attempts": 0,
        }
        insertResult = mdb["otpList"].insert_one(otpRequest)

        if not insertResult.acknowledged:
            return {
                "status": 0,
                "class": "error",
                "message": "Yikes! Something went wrong while saving your OTP. 😬 Try again in a bit!",
                "payload": {},
            }

        messageSid = send_sms(phoneNumber, otp)
        maskMobileNumber = maskMobile(phoneNumber)
        if messageSid is None:
            return {
                "status": 0,
                "class": "error",
                "message": f"Couldn't send OTP to {maskMobileNumber}. The vibe's interrupted! 🚫",
                "payload": {},
            }

        return {
            "status": 1,
            "class": "success",
            "message": f"Vibe check! Verification code sent to {maskMobileNumber}. Check your inbox! 📩",
            "payload": otpRequest,
        }


class OtpVerification(Resource):
    def post(self):
        inputData = request.get_json(silent=True)
        otpData = inputData.get("otp")
        verificationCode = inputData.get("verificationCode")
        phoneNumber = otpData.get("phoneNumber")
        
        if not otpData or not verificationCode or not phoneNumber:
            return {
                "status": 0,
                "class": "error",
                "message": "Whoa! Looks like we're missing a few details. Let's double-check that OTP and try again! 🔄",
                "payload": {},
            }

        otpData["attempts"] = otpData.get("attempts", 0) + 1

        response = is_otp_valid(otpData, verificationCode, phoneNumber)
        currentTime = getUtcCurrentTime()

        mdb["otpList"].update_one(
            {"_id": otpData.get("_id")},
            {"$set": {"verificationCode": verificationCode, "updatedAt": currentTime}},
        )

        return response
