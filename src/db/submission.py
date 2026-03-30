from flask import Blueprint, jsonify, request

from . import db

bp = Blueprint("submission", __name__)


@bp.route("/submission", methods=["POST"])
def submission():
    database = db.get_db()
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    tel = data.get("telephone")
    message = data.get("message")

    required = [name, email, tel, message]
    if not all(required):
        return jsonify({"message": "Some required fields are empty"}), 400

    try:
        database.execute(
            "INSERT INTO submissions(name,email,telephone,message) VALUES (?,?,?,?)",
            (name, email, tel, message),
        )
        database.commit()
    except database.IntegrityError:
        return jsonify({"message": "Submission already exists"}), 409

    finally:
        database.close()
    return (
        jsonify({"message": "Enquiry created"}),
        200,
    )
