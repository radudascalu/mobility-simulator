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
      <h3>Input the box area coordinates for the simulation</h3>
      <TextField defaultValue="13.506317138671875" label="Max longitude" />

      <Box display="flex" justifyContent="space-between">
        <TextField defaultValue="52.52791908000258" label="Min latitude" />
        <TextField defaultValue="52.562995039558004" label="Max latitude" />
      </Box>

      <TextField defaultValue="13.34014892578125" label="Min longitude" />
    </div>
  );
}

export default Step1;
