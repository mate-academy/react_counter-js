/* eslint-disable react/button-has-type */
/* eslint-disable padding-line-between-statements */
import { useState } from 'react';
// eslint-disable-next-line import/no-self-import
import './App';

export function App() {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(prev => prev + 1);
  const add100 = () => setCount(prev => prev + 100);

  const increase = () => {
    setCount(prev => {
      const newCount = prev + 1;
      if (newCount % 5 === 0) {
        return newCount + 100;
      }
      return newCount;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">Count: {count}</h1>
      <button className="App__add-one" onClick={addOne}>
        Add 1
      </button>
      <button className="App__add-100" onClick={add100}>
        Add 100
      </button>
      <button className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
}
