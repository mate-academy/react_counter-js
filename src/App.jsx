import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    // write code here
    setCount(prev => prev + 1);
  };

  const add100 = () => {
    // write code here
    setCount(prev => prev + 100);
  };

  // DON'T change the code below
  // Fixed increase: add 1 first, then maybe +100
  // я хз тут пише нічого не міняти але та єбанашка каже щоб я це поміняв
  const increase = () => {
    setCount(prev => {
      let next = prev + 1;

      if (next % 5 === 0) {
        next += 100;
      }

      return next;
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
