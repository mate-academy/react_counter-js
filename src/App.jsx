import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(prev => prev + 1);
  const add100 = () => setCount(prev => prev + 100);

  const increase = () => {
    setCount(prev => {
      const newCount = prev + 1;

      return newCount % 5 === 0 ? newCount + 100 : newCount;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">{count}</h1>

      {/* Elemento necessário para os testes passarem */}
      <div className="counter">{count}</div>

      <button className="add1" onClick={addOne} type="button">
        Add 1
      </button>

      <button className="add100" onClick={add100} type="button">
        Add 100
      </button>

      <button className="increase" onClick={increase} type="button">
        Increase
      </button>
    </div>
  );
};
