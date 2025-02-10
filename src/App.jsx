/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  const increase = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;

      return newCount % 5 === 0 ? newCount + 100 : newCount;
    });
  };

  return (
    <div className="app">
      <h1 className="App__title">Counter: {count}</h1> {/* Виправлено */}
      <button onClick={addOne}>Add 1</button>
      <button onClick={add100}>Add 100</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
};
