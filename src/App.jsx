import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prev => prev + 1);
  };

  const add100 = () => {
    setCount(prev => prev + 100);
  };

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="app">
      <h1 className="app__title">{`Count: ${count}`}</h1>

      <button type="button" className="app__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="app__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="app__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
