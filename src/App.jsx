import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  const handleIncrease = () => {
    setCount(prevCount => {
      const shouldAdd100 = prevCount % 5 === 0;

      let nextCount = prevCount + 1;

      if (shouldAdd100) {
        nextCount += 100;
      }

      return nextCount;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">Count: {count}</h1>

      <div className="App__controls">
        <button type="button" className="App__add-one" onClick={addOne}>
          Add 1
        </button>

        <button type="button" className="App__add-100" onClick={add100}>
          Add 100
        </button>

        <button
          type="button"
          className="App__increase"
          onClick={handleIncrease}
        >
          Increase
        </button>
      </div>
    </div>
  );
};
