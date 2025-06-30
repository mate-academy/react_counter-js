import { useState, useRef } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const isIncreaseTriggered = useRef(false);

  const addOne = () => {
    setCount(prev => {
      const newCount = prev + 1;

      if (isIncreaseTriggered.current && newCount % 5 === 0) {
        isIncreaseTriggered.current = false;

        return newCount + 100;
      }

      isIncreaseTriggered.current = false;

      return newCount;
    });
  };

  const add100 = () => {
    isIncreaseTriggered.current = true;
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

      <button
        type="button"
        className="App__add-100"
        onClick={() => setCount(c => c + 100)}
      >
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
