import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prev => prev + 1);
  };

  const add100 = () => {
    setCount(prev => prev + 100);
  };

  const increase = () => {
    setCount(prev => {
      // 1. Спочатку додаємо 1
      let next = prev + 1;

      // 2. Перевіряємо нове значення
      if (next % 5 === 0) {
        next += 100;
      }

      return next;
    });
  };

  const decrease = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1 className="App__title">Counter: {count}</h1>

      <div className="App__controls">
        <button type="button" onClick={addOne}>
          +1
        </button>

        <button type="button" onClick={add100}>
          +100
        </button>

        <button type="button" onClick={increase}>
          Increase
        </button>

        <button type="button" onClick={decrease}>
          -1
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
