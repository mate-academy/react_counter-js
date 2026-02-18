import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(currCount => currCount + 1);
  };

  const add100 = () => {
    setCount(currCount => currCount + 100);
  };

  // DON'T change the code below
  const increase = () => {
    setCount(prevCount => {
      const isDivisibleByFive = prevCount % 5 === 0;

      if (isDivisibleByFive) {
        return prevCount + 101;
      }

      return prevCount + 1;
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
