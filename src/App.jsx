import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const [shouldAdd100, setShouldAdd100] = useState(false);

  const addOne = () => {
    setCount(count + 1);
  };

  const add100 = () => {
    setCount(count + 100);
  };

  const increase = () => {
    if (shouldAdd100) {
      add100();
      setShouldAdd100(false);
    } else {
      addOne();
      if ((count + 1) % 5 === 0) {
        setShouldAdd100(true);
      }
    }
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
