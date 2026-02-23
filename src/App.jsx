import { useState } from 'react';
import './App.scss';

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
      const next = prev + 1;

      return prev % 5 === 0 ? next + 100 : next;
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

// – Кнопка **Increase** сначала вызывает addOne, а затем, если
// текущее значение счётчика делится на 5 без остатка, дополнительно вызывает add100.

// То есть третья кнопка должна увеличивать счётчик так:

// 101, 102, 103, 104, 105, 206, 207, 208, 209, 210, 311 …
