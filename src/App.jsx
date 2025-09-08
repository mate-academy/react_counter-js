import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(current => current + 1);
  };

  const add100 = () => {
    setCount(current => current + 100);
  };

  const increase = () => {
    setCount(prev => {
      const next = prev + 1;

      if (next % 5 === 0) {
        return next + 100;
      }

      return next;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

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
  );
};
