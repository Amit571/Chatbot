from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from sqlalchemy import false, true
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:@localhost/form'
# db = SQLAlchemy(app)


# class Datatabel(db.Model):
#     name = db.Column(db.String, primary_key=false)
#     mobile = db.Column(db.Integer(), unique=false)
#     email = db.Column(db.String(), unique=false)

ait_bot = ChatBot("Chatterbot")
trainer = ChatterBotCorpusTrainer(ait_bot)
trainer.train("data/data.yml")


@app.route("/", methods = ['GET','POST'])
def home():
    # if (request.method == 'POST'):
    #     name = request.form.get('name')
    #     mobile = request.form.get('mobile')
    #     email = request.form.get('email')
    #     entry = Datatabel(name = name, mobile = mobile, email = email )
    #     db.session.add(entry)
    #     db.session.commit()
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(ait_bot.get_response(userText))


if __name__ == "__main__":
    app.run(debug=true)