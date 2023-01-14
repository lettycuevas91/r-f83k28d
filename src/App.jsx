import React, { useState } from 'react';
import './App.css';



   export const Contador = () => {
      const [increment, SetIncrement] = useState(1);
      const increase = () => {
        SetIncrement(increment + 1);
      };
    
   
    return (
      <div className="value">
        <span>{increment}</span>
        <button id="inc" onClick={increase}>Incrementa</button>
      </div>
    );
  }

export default Contador;
