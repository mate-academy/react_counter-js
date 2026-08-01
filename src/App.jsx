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
      const shouldAdd100 = prev % 5 === 0; // Check divisibility on the original count
      const incremented = prev + 1; // Add 1 to the count

      return shouldAdd100 ? incremented + 100 : incremented; // Add 100 if original count was divisible by 5
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
