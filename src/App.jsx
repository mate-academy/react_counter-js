import { useState, useEffect, useRef } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const shouldCheckAdd100 = useRef(false);

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  const increase = () => {
    shouldCheckAdd100.current = true; // Set flag to check add100 after state update
    addOne(); // Call addOne first
  };

  useEffect(() => {
    if (shouldCheckAdd100.current && count % 5 === 0) {
      add100(); // Call add100 if count is divisible by 5
      shouldCheckAdd100.current = false; // Reset flag
    }
  }, [count]);

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
