import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(num => num + 1);
  };

  const add100 = () => {
    setCounter(num => num + 100);
  };

  const increase = () => {
    if (counter === 100) {
      addOne();
      add100();
    } else {
      addOne();
      if (counter % 5 === 0) {
        add100();
      }
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${counter}`}</h1>

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
