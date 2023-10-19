import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(countCurrent => countCurrent + 1);
  };

  const add100 = () => {
    setCount(countCurrent => countCurrent + 100);
  };

  const increase = () => {
    // eslint-disable-next-line no-unused-expressions
    count % 5 === 0 || count === 0 ? add100() : null;
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
