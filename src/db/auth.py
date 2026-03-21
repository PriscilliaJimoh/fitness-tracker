import os

from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash

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

    # a simple page that says hello
    @app.route("/hello")
    def hello():

        database = db.get_db()
        cur = database.cursor()
        res = cur.execute("SELECT * FROM users")
        print(res)
        return "Hello, World!", f"{res}"

    @app.route("/signup", methods=["POST"])
    def signup():
        database = db.get_db()
        data = request.get_json()

        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

        if not username or not email or not password:
            return jsonify({"message": "All fields are required"}), 400

        existing_users = database.execute(
            "SELECT * FROM users WHERE email = ? OR username = ?", (email, username)
        ).fetchone()

        if existing_users:
            return jsonify({"message": "Email or username already taken"}), 409

        database.execute(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            (username, email, generate_password_hash(password)),
        )
        database.commit()
        database.close()

        return (
            jsonify({"message": "Account created, welcome!", "username": username}),
            200,
        )

    @app.route("/login", methods=["POST"])
    def login():
        data = request.get_json()

        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"message": "All fields are required"}), 400

        database = db.get_db()
        user = database.execute(
            "SELECT * FROM users WHERE email = ?", (email,)
        ).fetchone()

        if user is None:
            return jsonify({"message": "Incorrect email"}), 401

        if not check_password_hash(user["password"], password):
            return jsonify({"message": "Incorrect password"}), 401

        return jsonify({"message": "Logged in!", "username": user["username"]}), 200

    @app.route("/logout", methods=["POST"])
    def logout():
        # session.clear()
        return jsonify({"message": "Logged out"}), 200

    return app
