import { useState, useRef } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const wasAdd100Triggered = useRef(false);

  const addOne = () => {
    setCount(prev => {
      if (wasAdd100Triggered.current) {
        wasAdd100Triggered.current = false;

        return prev + 1;
      }

      const newCount = prev + 1;

      if (newCount % 5 === 0) {
        return newCount + 100;
      }

      return newCount;
    });
  };

  const add100 = () => {
    wasAdd100Triggered.current = true;
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
