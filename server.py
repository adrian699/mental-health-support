from fastapi import FastAPI
import gdown
import os
import pickle

app = FastAPI()

# Google Drive link for model.pkl
MODEL_PATH = "model.pkl"
MODEL_URL = "https://drive.google.com/uc?id=1J6mYkEbJLUxFXSTIx4opxIvdBZpJrN8a"

# Download model if not exists
if not os.path.exists(MODEL_PATH):
    print("Downloading model from Google Drive...")
    gdown.download(MODEL_URL, MODEL_PATH, quiet=False)
else:
    print("Model already exists. Skipping download.")

# Load the model
with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

@app.get("/")
def read_root():
    return {"message": "API is working!"}

@app.post("/chatbot/")
async def chatbot_response(user_input: str):
    """
    Process user input and return the chatbot response.
    """
    # Assuming your model is a classifier, modify it for your chatbot
    response = model.predict([user_input])[0]  
    return {"response": response}
