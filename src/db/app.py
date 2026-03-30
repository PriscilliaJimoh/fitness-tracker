import os

from flask import Flask
from flask_cors import CORS

from .auth import hello_bp, login_bp, logout_bp, signup_bp
from .submission import submission_bp

from . import db


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config.from_mapping(
        SECRET_KEY="dev",
        DATABASE=os.path.join(app.instance_path, "db.sqlite"),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    os.makedirs(app.instance_path, exist_ok=True)

    db.init_app(app)

    app.register_blueprint(hello_bp, url_prefix="/hello")
    app.register_blueprint(signup_bp, url_prefix="/signup")
    app.register_blueprint(login_bp, url_prefix="/login")
    app.register_blueprint(logout_bp, url_prefix="/logout")
    app.register_blueprint(submission_bp, url_prefix="/submission")

    return app
