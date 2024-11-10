# Flask API example (backend/app.py)
from flask import Flask, request, jsonify
import torch
from hazard_prediction import HazardLSTM
from user_behavior_model import recommend_route

app = Flask(__name__)

# Load trained models
hazard_model = HazardLSTM(input_size=10, hidden_size=50, num_layers=2)
hazard_model.load_state_dict(torch.load('hazard_model.pth'))

@app.route("/predict_hazard", methods=["POST"])
def predict_hazard():
    data = request.json
    location = data['location']
    features = torch.tensor(location).float().unsqueeze(0)
    prediction = hazard_model(features).item()
    return jsonify({"hazard_prediction": prediction})

@app.route("/recommend_route", methods=["POST"])
def recommend_route_api():
    user_id = request.json['user_id']
    route_id = recommend_route(user_id)
    return jsonify({"recommended_route": route_id})

if __name__ == "__main__":
    app.run(debug=True)