import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const add100 = () => {
    setCount(count + 100);
  };

  // DON'T change the code below
  const increase = () => {
    setCount((currentCount) => {
      if (currentCount % 5 === 0) {
        return currentCount + 100 + 1;
      }

      return currentCount + 1;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">
        {`Count: ${count}`}
      </h1>

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
