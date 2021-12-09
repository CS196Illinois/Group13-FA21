from flask import Flask, json
from flask import jsonify 
from animal import SetUP

app = Flask(__name__)

@app.route("/test")
def positionOfPredator():
    p = SetUP();
    data = {}
    data = p.predatorPosition();
    return jsonify(data)

    # jsonify(data)

# @app.route("/test")
# def test():
#     p = SetUP();
#     data = {}
#     data = p.predatorPosition();
#     return {
#         'userId': 1,
#         'title': 'Flask React Application', 
#         'completed': False 
#     }