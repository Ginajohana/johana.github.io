"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, send_file
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask import send_file

api = Blueprint("api", __name__)


@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/download-png", methods=["GET"])
def download_pdf():
    # Ruta local del archivo PDF en el servidor
    pdf_file_path = (
        "https://fictional-journey-w6qw4xwwq6vf5r-3000.app.github.dev/cv-johana.png"
    )

    # Utiliza send_file para enviar el archivo al cliente
    return send_file(pdf_file_path, as_attachment=True)
