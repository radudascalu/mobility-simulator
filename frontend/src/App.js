import './App.css';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Results from './Results/Results';
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [noOfRequests, setNoOfRequests] = useState(10);

  function next() {
    setCurrentStep(currentStep + 1);
  }

  function previous() {
    setCurrentStep(currentStep - 1);
  }

  function reset() {
    setCurrentStep(1);
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="sm">
        {currentStep == 1 && <Step1></Step1>}
        {currentStep == 2 && <Step2 onNoOfRequestsChange={setNoOfRequests}></Step2>}
        {currentStep == 3 && <Results noOfRequests={noOfRequests}></Results>}


        <div className="Buttons-wrapper">
          {currentStep < 3
            ? <div>
                <Button variant="outlined" onClick={previous} disabled={currentStep != 2}>Back</Button>
                <Button onClick={next} variant="contained" color="primary">Next</Button>
              </div>
            : <Button onClick={reset} variant="contained" color="primary">Reset</Button>
          }
        </div>
      </Container>
    </div>
  );
}

export default App;
