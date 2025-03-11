import { useState } from 'react';
import './App.scss';

export const App = () => {
  // eslint-disable-next-line prefer-const
  let [count, newCount] = useState(0);

  const addOne = () => {
    newCount(count + 1);
  };

  const add100 = () => {
    newCount(count + 100);
    count += 100;
  };

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
