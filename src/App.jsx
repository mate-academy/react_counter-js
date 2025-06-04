import { useState, useRef } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  // оновлюємо ref паралельно зі стейтом
  const syncSetCount = newCount => {
    countRef.current = newCount;
    setCount(newCount);
  };

  const addOne = () => {
    syncSetCount(countRef.current + 1);
  };

  const add100 = () => {
    syncSetCount(countRef.current + 100);
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
