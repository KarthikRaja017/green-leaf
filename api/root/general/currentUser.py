from flask_restful import Resource
from root.auth.auth import auth_required
from root import mongo


mdb = mongo.db


class CurrentUser(Resource):
    @auth_required(isOptional=True)
    def get(self, uid, user):
        print(f"uid: {uid}")
        if not uid:
            return {"status": 0, "msg": "Not logged in", "payload": {}}

        userid = user.get("_id")
        projection = {"email": 1, "token.accessToken": 1, "firstName": 1}
        if user:
            data = mdb.users.find_one({"_id": userid}, projection)

        return {"status": 1, "msg": "Success", "payload": data}
