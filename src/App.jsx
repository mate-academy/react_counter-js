import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prev => prev + 1);
  };

  const add100 = () => {
    setCount(prev => prev + 100);
  };

  const increase = () => {
    setCount(prev => {
      if (prev % 5 === 0) {
        return prev + 1 + 100;
      }

      return prev + 1;
    });
  };

  return (
    <div className="section">
      <h1 className="title">{count}</h1>

      <button type="button" onClick={addOne}>
        Add 1
      </button>

      <button type="button" onClick={add100}>
        Add 100
      </button>

      <button type="button" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
