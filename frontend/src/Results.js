import logo from './logo.svg';
import './Results.css';
import React, { useState, useEffect } from 'react';

function Results() {
  useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => {
      setResult(data);
    });
  }, []);

  return (
    <div>
      <h2>Simulation results</h2>
    </div>
  );
}

export default Results;
