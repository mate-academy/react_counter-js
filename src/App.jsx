/* eslint-disable no-shadow */
import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0); // Initialize count state

  const addOne = () => {
    setCount(prevCount => prevCount + 1); // Increment count by 1
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100); // Increment count by 100
  };

  // DON'T change the code below
  const increase = () => {
    if (count === 0 || count === 100) {
      // If count is 0 or 100, add 1 and then add 100
      addOne();
      add100();
    } else {
      // For other values, first increment and then check if divisible by 5
      setCount(prevCount => {
        const newCount = prevCount + 1;

        if (newCount % 5 === 0) {
          setTimeout(() => {
            setCount(prevCount => prevCount + 100);
          }, 0); // Ensure this runs after the initial count update
        }

        return newCount;
      });
    }
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
