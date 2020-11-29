from flask import Flask
import time
from simulator import Simulator

app = Flask(__name__)

@app.route('/test')
def get():
    number_of_requests = 2
    bounding_box = (13.34014892578125, 82.52791908000258, 13.506317138671875, 52.562995039558004)
    result = Simulator(bounding_box).simulate(20)
    return {'result': result}
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)