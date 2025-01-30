from flask import request
from flask_restful import Resource
from root import mongo

from root.auth.auth import getAccessTokens
from root.utilis import uniqueId
from werkzeug.security import check_password_hash

mdb = mongo.db


class CreateAccount(Resource):
    def post(self):
        inputData = request.get_json(silent=True)

        birthDateFormat = inputData.get("birthDateformat")
        email = inputData.get("email")
        if not birthDateFormat or not email:
            return {
                "status": 0,
                "class": "error",
                "message": "Birth date and email are required to create an account.",
            }

        sameEmail = mdb["users"].find_one({"email": email}, {"email": 1})
        if sameEmail:
            return {
                "status": 0,
                "class": "error",
                "message": "This email is already registered. If you forgot your password, please use the 'Forgot Password' option.",
            }
        inputData.pop("birthdate", None)
        userInfo = {
            "_id": uniqueId(digit=5, isNum=True, prefix="U"),
            "dob": birthDateFormat,
            **inputData,
        }
        userInfo.pop("birthDateformat", None)

        token = getAccessTokens(userInfo)
        mdb["users"].insert_one({**userInfo, **token})

        return {
            "status": 1,
            "class": "success",
            "message": "Account successfully created! Welcome to Green Leaf! 🌟",
            "payload": {"email": email, "userId": userInfo["_id"], **token},
        }


class LoginAccount(Resource):
    def post(self):
        inputData = request.get_json(silent=True)
        if not inputData:
            return {
                "status": 0,
                "class": "error",
                "message": "Invalid request. Please provide email and password.",
            }

        email = inputData.get("email")
        inputPassword = inputData.get("password")

        if not email or not inputPassword:
            return {
                "status": 0,
                "class": "error",
                "message": "Email and password are required.",
            }

        user = mdb["users"].find_one({"email": email}, {"password": 1, "firstName": 1})

        if not user:
            return {
                "status": 0,
                "class": "error",
                "message": "Email not found. Please sign up or try again.",
            }

        dbPassword = user.get("password")
        if dbPassword != inputPassword:
            return {
                "status": 0,
                "class": "error",
                "message": "Incorrect password. Please try again.",
            }
        userInfo = {"firstName": user["firstName"], "_id": user["_id"]}
        token = getAccessTokens(userInfo)
        mdb["users"].update_one({"_id": user["_id"]}, {"$set": {"token": token}})
        return {
            "status": 1,
            "class": "success",
            "message": f"Welcome back to Green Leaf, {user.get('firstName', 'User')}! Let's get you in sync with the vibe. 🌟",
            "payload": {
                "email": email,
                "userId": userInfo["_id"],
                "token": token["accessToken"],
            },
        }
