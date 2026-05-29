from flask import Flask, render_template, request
from rapidfuzz import fuzz
import json

app = Flask(__name__)

# Load chatbot dataset
with open(
    r"C:\Users\amits\Work\Projects\Chatbot\Test\data\JSON DATA\Data.json",
    'r',
    encoding='utf-8'
) as file: 

    data = json.load(file) 

@app.route("/", methods=['GET', 'POST'])
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():

    userText = request.args.get('msg')

    if not userText:
        return "Please type something."

    userText = userText.lower()

    best_score = 0
    best_answer = "Sorry, I don't understand."

    # Compare user message with dataset
    for item in data:

        for question in item["questions"]:

            score = fuzz.token_sort_ratio(
                userText,
                question.lower()
            )

            if score > best_score:

                best_score = score
                best_answer = item["answer"]

    # Minimum matching score
    if best_score >= 60:
        return best_answer

    else:
        return "Sorry, I don't understand."

if __name__ == "__main__":
    app.run(debug=True)
