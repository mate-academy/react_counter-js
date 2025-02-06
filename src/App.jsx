import { useState } from 'react';
import './App.scss';

export const App = () => {
  // Define count as state
  const [count, setCount] = useState(0);

  // Function to add 1 to the count
  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to add 100 to the count
  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  // Increase function as specified
  const increase = () => {
    // First, add 1
    setCount(prevCount => {
      const newCount = prevCount + 1;

      // If count is divisible by 5 after adding 1, add 100
      if (newCount % 5 === 0) {
        return newCount + 100;
      }

      return newCount;
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
