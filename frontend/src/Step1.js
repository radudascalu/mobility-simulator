import logo from './logo.svg';
import './Step1.css';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

function Step1() {
  const [boundingBox, setBoundingBox] = useState(0);

  return (
    <div>
      <h2>Step 1/2</h2>
      <h3>Select the area for the simulation</h3>
      <Box display="flex" justifyContent="space-between">
        <TextField defaultValue="13.34014892578125" label="Point A" />
        <TextField defaultValue="13.34014892578125" label="Point B" />
      </Box>

      <div className="Bounding-box"></div>

      <Box display="flex" justifyContent="space-between">
        <TextField defaultValue="13.34014892578125" label="Point C" />
        <TextField defaultValue="13.34014892578125" label="Point D" />
      </Box>
    </div>
  );
}

export default Step1;
