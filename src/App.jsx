import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, changeCount] = useState(0);

  const addOne = () => {
    changeCount(prev => prev + 1);
  };

  const add100 = () => {
    changeCount(prev => prev + 100);
  };

  const increase = () => {
    changeCount(prev => {
      const newCount = prev + 1;

      return newCount % 5 === 0 ? newCount + 100 : newCount;
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
