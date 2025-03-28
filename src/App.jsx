import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, plasCount] = useState(0);

  const addOne = () => {
    plasCount(curCount => curCount + 1);
  };

  const add100 = () => {
    plasCount(curCount => curCount + 100);
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
