// src/App.jsx
import React, { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(c => c + 1);
  };

  const add100 = () => {
    setCount(c => c + 100);
  };

  const increase = () => {
    setCount(c => {
      const afterOne = c + 1;

      // if the old count (c) was a multiple of 5, add 100 on top of the +1
      return c % 5 === 0 ? afterOne + 100 : afterOne;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">Count: {count}</h1>

      <div className="App__buttons">
        <button type="button" className="App__add-one" onClick={addOne}>
          Add 1
        </button>

        <button type="button" className="App__add-100" onClick={add100}>
          Add 100
        </button>

        <button type="button" className="App__increase" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
