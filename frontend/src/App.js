import logo from './logo.svg';
import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Results from './Results';
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function App() {
  const [result, setResult] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  function next() {
    setCurrentStep(currentStep + 1);
  }

  function previous() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="sm">
        The result is {result}.
        {currentStep == 1 && <Step1></Step1>}
        {currentStep == 2 && <Step2></Step2>}
        {currentStep == 3 && <Results></Results>}

        <Button variant="outlined" onClick={previous} disabled={currentStep != 2}>
          Back
        </Button>
        
        <Button onClick={next} variant="contained" color="primary">
          Next
        </Button>
    
      </Container>
    </div>
  );
}

export default App;
