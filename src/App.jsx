import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  let prevValue = count;

  const addOne = () => {
    prevValue += 1;
    setCount(prevValue);
  };

  const add100 = () => {
    prevValue += 100;
    setCount(prevValue);
  };

  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
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
