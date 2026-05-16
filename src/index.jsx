import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(currentCount => currentCount + 1);
  };

  const add100 = () => {
    setCount(currentCount => currentCount + 100);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={addOne}>
        Add 1
      </button>
      <button type="button" onClick={add100}>
        Add 100
      </button>
    </div>
  );
};
