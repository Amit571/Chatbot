import os
from flask import Flask, render_template, request
from chatterbot import ChatBot

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "db.sqlite3")

ait_bot = ChatBot(
    "Chatterbot",
    storage_adapter="chatterbot.storage.SQLStorageAdapter",
    database_uri=f"sqlite:///{DB_PATH}"
)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get("msg")
    return str(ait_bot.get_response(userText))
