import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const nextCountRef = useState(count);

  const addOne = () => {
    setCount(lastCount => {
      const newCount = lastCount + 1;

      nextCountRef.current = newCount;

      return newCount;
    });
  };

  const add100 = () => {
    setCount(lastCount => {
      const newCount = lastCount + 100;

      nextCountRef.current = newCount;

      return newCount;
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
