from flask import Flask
from flask import jsonify 
from animal import SetUP

app = Flask(__name__)

@app.route("/test")
def positionOfPredator():
    p = SetUP();
    data = {}
    data = p.predatorPosition();
    return jsonify(data)