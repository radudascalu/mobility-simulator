import './Step2.css';
import React, { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';

function Step2(props) {
  function handleChange(event, value) {
    props.onNoOfRequestsChange(value);
  }

  return (
    <div>
      <h2>Step 2/2</h2>
      <h3>Select the number of ridepooling services to simulate</h3>

      <Slider 
        min={1} 
        max={100}
        valueLabelDisplay="on"
        onChange={handleChange}
        defaultValue={10}></Slider>
    </div>
  );
}

export default Step2;
