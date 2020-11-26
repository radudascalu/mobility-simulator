from flask import Flask
import time

app = Flask(__name__)

@app.route('/test')
def get():
    return {'time': time.time()}