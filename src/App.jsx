import { useState } from 'react';
import './App.scss';

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
      const newCount = prev + 1;

      return newCount % 5 === 0 ? newCount + 100 : newCount;
    });
  };

  return (
    <div className="App">
      <h1>{count}</h1>

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
