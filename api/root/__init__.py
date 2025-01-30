import os

from flask import Flask, send_from_directory
from flask_jwt_extended import JWTManager
from root.db import mongo
from flask_restful import Api

api = Api()
jwt = JWTManager()


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config['DEBUG'] = True
    mongo.init_app(app)
    jwt.init_app(app)

    # Define frontend and dist folder paths
    frontend_folder = os.path.abspath(os.path.join(os.getcwd(), "..", "web"))
    dist_folder = os.path.join(frontend_folder, "dist")

    # Route to serve frontend files
    @app.route("/", defaults={"filename": ""})
    @app.route("/<path:filename>")
    def index(filename):
        if filename and os.path.exists(os.path.join(dist_folder, filename)):
            return send_from_directory(dist_folder, filename)
        else:
            return send_from_directory(dist_folder, "index.html")

    # Register blueprints
    from root.users import users_bp
    app.register_blueprint(users_bp)

    from root.general import general_bp
    app.register_blueprint(general_bp)

    # Application secret key
    app.config["SECRET_KEY"] = (
        "a3bd9aed42a4b85d79c6b3feba872454e860e097d7af3963189a0466b0b953b5"
    )

    return app

