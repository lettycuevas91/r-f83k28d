import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, SetCount] = useState(0);
  const buttonHandler = () => {
    let sum = count + 1;
    SetCount(sum);
  };

  return (
    <div>
      <span className="value">{count}</span>
      <button id="inc" onClick={buttonHandler}>
        Incrementa
      </button>
    </div>
  );
}
export default App;