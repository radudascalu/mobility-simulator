## Description

The project simulates ridepooling services in Berlin and displays the resulted KPIs.

The frontend project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the backed project was created using Flask. It was developed on a Windows environment but the setup instructions should work on any other environment.

## Setup

In order to run the project locally (in development mode) follow these steps:

##### 1. Setup backend

- go to `/backend`;
- create a virtual environment `python -m venv myenv` and activate it `myenv/Scripts/activate.bat`;
- install project dependencies using `pip install -r requirements.txt`;
- make sure port 5000 is available on your machine and run `flask run`;


##### 2. Setup frontend

- make sure you have Node.js (https://nodejs.org/en/) and yarn (`npm install -g yarn`) installed;
- go to `/frontend`;
- install dependencies `yarn install`;
- run the app using `yarn start`;
- the app is available on port 3000 and will open automatically in your default browser;

