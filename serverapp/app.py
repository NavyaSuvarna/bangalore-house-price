from flask import Flask, request, jsonify
import util
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    total_sqft = request.json.get('total_sqft')
    location = request.json.get('location')
    bhk = int(request.json.get('bhk'))
    bath = int(request.json.get('bath'))
    response = jsonify({
        'estimated_price': util.get_estimated_price(location,total_sqft,bhk,bath)
    })
   
   
    return response

if __name__ == "__main__":
    util.load_saved_artifacts()
    app.run()