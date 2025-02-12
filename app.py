from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load("model.pkl")  # Change to model.h5 or model.pth if needed

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = data["features"]  # Expecting JSON input with "features"
    
    # Make prediction
    prediction = model.predict([features])
    
    return jsonify({"prediction": prediction.tolist()})

if __name__ == "__main__":
    app.run(debug=True)
