import './Step1.css';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

function Step1() {
  return (
    <div>
      <h2>Step 1/2</h2>
      <h3>Confirm the box area coordinates for the simulation</h3>
      <TextField disabled defaultValue="13.506317138671875" label="Max longitude" />

      <Box display="flex" justifyContent="space-between">
        <TextField disabled defaultValue="52.52791908000258" label="Min latitude" />
        <TextField disabled defaultValue="52.562995039558004" label="Max latitude" />
      </Box>

      <TextField disabled defaultValue="13.34014892578125" label="Min longitude" />
    </div>
  );
}

export default Step1;
