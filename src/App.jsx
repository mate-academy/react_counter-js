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

  // DON'T change the code below
  const increase = () => {
    setCount(prev => {
      const updated = prev + 1;
      // if divisible by 5, add 100 more
      return updated % 5 === 0 ? updated + 100 : updated;
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
