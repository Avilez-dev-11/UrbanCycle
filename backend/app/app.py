from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/report_hazard', methods=['POST'])
def report_hazard():
    data = request.json
    return jsonify({"status": "Hazard reported", "data": data}), 201

if __name__ == '__main__':
    app.run(debug=True)