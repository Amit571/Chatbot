from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# Initialize chatbot
ait_bot = ChatBot("Chatterbot")
trainer = ChatterBotCorpusTrainer(ait_bot)
trainer.train('data/data.yml')  # Ensure a valid corpus

@app.route("/", methods=['GET', 'POST'])
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(ait_bot.get_response(userText))

if __name__ == "__main__":
    app.run()  # Fix boolean value

# if __name__ == "__main__":
#     app.run(debug=True)  # Fix boolean value