from flask import Blueprint, jsonify, request
from werkzeug.security import check_password_hash, generate_password_hash

from . import db

bp = Blueprint("auth", __name__)



@bp.route("/hello")
def hello():

    database = db.get_db()
    cur = database.cursor()
    res = cur.execute("SELECT * FROM users").fetchall()
    print(res)
    return "Hello, World!", f"{res}"


@bp.route("/signup", methods=["POST"])
def signup():
    database = db.get_db()
    data = request.get_json()

    username = data.get("username")
    email = data.get("email")
    password = data.get("password_hash")

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


@bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password_hash")

    if not email or not password:
        return jsonify({"message": "All fields are required"}), 400

    database = db.get_db()
    user = database.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()

    if user is None:
        return jsonify({"message": "Incorrect email"}), 401

    if not check_password_hash(user["password_hash"], password):
        return jsonify({"message": "Incorrect password"}), 401

    return jsonify({"message": "Logged in!", "username": user["username"]}), 200


@bp.route("/logout", methods=["POST"])
def logout():
    # session.clear()
    return jsonify({"message": "Logged out"}), 200
