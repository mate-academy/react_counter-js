import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(num => {
      let counter = num;

      counter += 1;

      return counter;
    });
  };

  const add100 = () => {
    setCount(num => {
      let counter = num;

      counter += 100;

      return counter;
    });
  };

  const increase = () => {
    setCount(num => {
      let updated = num;

      if (updated % 5 === 0) {
        updated += 100;
      }

      updated += 1;

      return updated;
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
