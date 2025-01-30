from flask import request
from flask_restful import Resource
from root import mongo


from root.utilis import getUserSnippet, uniqueId

mdb = mongo.db


class ProfileSetup(Resource):
    def post(self):
        inputData = request.get_json(silent=True)
        
        if not inputData or "userName" not in inputData or "otp" not in inputData:
            return {
                "status": 0,
                "class": "error",
                "message": "Oops! Looks like you're missing something. Double-check and let's vibe again! 😅",
            }

        userName = inputData["userName"]
        mobileNumber = inputData["otp"].get("phoneNumber")

        if not mobileNumber:
            return {
                "status": 0,
                "class": "error",
                "message": "We need that number to keep you in the loop! Drop your digits and let's keep vibing! 📱",
            }

        # userMeta = getUserSnippet(uid="admin", isNew=False, extra={})

        userInfo = {
            "_id": uniqueId(digit=5, isNum=True, prefix=f"U"),
            "name": userName,
            "mobile": mobileNumber,
            # **userMeta,
        }

        insertResult = mdb["users"].insert_one(userInfo)

        if insertResult.inserted_id:
            return {
                "status": 1,
                "class": "success",
                "message": "Welcome to Vibe Connect! Let's get you in sync with the vibe. 🌟",
                "payload": userInfo,
            }
        else:
            return {
                "status": 0,
                "class": "error",
                "message": "Yikes! Something went wrong on our end 😬. Hold tight while we sort it out!",
            }
