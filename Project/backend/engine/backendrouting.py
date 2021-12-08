from flask import Flask
from flask import jsonify 
from animal import SetUP
from flask_cors import CORS
from run import Run

app = Flask(__name__)
CORS(app)
# @app.route("/test")
# def positionOfPredator():
#     p = SetUP()
#     data = {}
#     data = p.preyPosition();
#     return jsonify(data)

r = Run

@app.route("/test")
def positionOfPredator():
    data = {}
    data = r.dataPredator
    return jsonify(data)

@app.route("/testTwo")
def positionOfPrey():
    data = {}
    data = r.dataPrey
    return jsonify(data)