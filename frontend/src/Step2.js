import logo from './logo.svg';
import './Step2.css';
import React, { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';

function Step2() {
  const [value, setValue] = useState(10);

  return (
    <div>
      <h2>Step 2/2</h2>
      <h3>Select the number of services</h3>

      
      <Slider 
        min={1} 
        max={100}
        valueLabelDisplay="on"
        defaultValue={value}></Slider>
    </div>
  );
}

export default Step2;
