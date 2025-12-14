import os
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CORPUS_PATH = os.path.join(BASE_DIR, "data", "data.yml")
DB_PATH = os.path.join(BASE_DIR, "db.sqlite3")

bot = ChatBot(
    "Chatterbot",
    storage_adapter="chatterbot.storage.SQLStorageAdapter",
    database_uri=f"sqlite:///{DB_PATH}"
)

trainer = ChatterBotCorpusTrainer(bot)
trainer.train(CORPUS_PATH)

print("Training completed successfully")
