import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, addNumber] = useState(0);

  const addOne = () => {
    addNumber(currentCount => {
      const result = currentCount;

      return result + 1;
    });
  };

  const add100 = () => {
    addNumber(currentCount => {
      const result = currentCount;

      return result + 100;
    });
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
