import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = event => {
    if (event) {
      setCount(prev => prev + 1);
    } else {
      setCount(prev => {
        const next = prev + 1;

        if (next % 5 === 0) {
          return next + 100;
        }

        return next;
      });
    }
  };

  const add100 = event => {
    if (event) {
      setCount(prev => prev + 100);
    } else {
      setCount(prev => {
        if (prev === 0 || prev === 100) {
          return prev + 100;
        }

        return prev;
      });
    }
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
