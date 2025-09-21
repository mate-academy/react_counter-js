import { useState } from 'react';
import './App.scss';

export const App = () => {
  // We need to set the state properly, so we need both the count value and the setter function
  const [count, setCount] = useState(0);

  // Function to add 1 to the count
  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to add 100 to the count
  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  // Increase function, checks if count is divisible by 5, then adds 100
  const increase = () => {
    addOne();  // First, add 1
    if (count % 5 === 0) {  // Then check if count is divisible by 5
      add100();  // If divisible by 5, add 100
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
