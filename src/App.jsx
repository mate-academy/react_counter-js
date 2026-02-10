import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(counter => {
      let currentCount = counter;

      currentCount += 1;

      return currentCount;
    });
  };

  const add100 = () => {
    setCount(counter => {
      let currentCount = counter;

      currentCount += 100;

      return currentCount;
    });
  };

  // DON'T change the code below
  const increase = () => {
    setCount(counter => {
      const next = counter + 1;

      return (next - 1) % 5 === 0 ? next + 100 : next;
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
