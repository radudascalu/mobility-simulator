from flask import Flask
import time
from simulator import Simulator
from flask import request

app = Flask(__name__)

# as the API evolves the different resources need to go in separate files but for now
# I kept it simple and left everything in app.py 
@app.route('/simulate', methods=['POST'])
def get():
    if "noOfRequests" not in request.json or 'boundingBox' not in request.json:
        abort(400)

    no_of_requests = request.json['noOfRequests']
    bounding_box = request.json['boundingBox']
    result = Simulator(tuple(bounding_box)).simulate(no_of_requests)
    
    return {
        'bookingDistanceBins': result['booking_distance_bins'],
        'mostPopularDropoffPoints': result['most_popular_dropoff_points'],
        'mostPopularPickupPoints': result['most_popular_pickup_points']
    }
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)