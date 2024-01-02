import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => count + 1;

  const add100 = () => count + 100;

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      return count + (100 + 1);
    }

    return count + 1;
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button
        type="button"
        className="App__add-one"
        onClick={() => {
          setCount(addOne);
        }}
      >
        Add 1
      </button>

      <button
        type="button"
        className="App__add-100"
        onClick={() => {
          setCount(add100);
        }}
      >
        Add 100
      </button>

      <button
        type="button"
        className="App__increase"
        onClick={() => {
          setCount(increase);
        }}
      >
        Increase
      </button>
    </div>
  );
};
