import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCurrentCount] = useState(0);

  const addOne = currentCount => {
    let newCurrentCount = currentCount;

    newCurrentCount += 1;

    setCurrentCount(newCurrentCount);
  };

  const add100 = currentCount => {
    let newCurrentCount = currentCount;

    newCurrentCount += 100;

    setCurrentCount(newCurrentCount);
  };

  // DON'T change the code below
  const increase = currentCount => {
    if (currentCount % 5 === 0) {
      add100(currentCount + 1);
    } else {
      addOne(currentCount);
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button
        type="button"
        className="App__add-one"
        onClick={() => addOne(count)}
      >
        Add 1
      </button>

      <button
        type="button"
        className="App__add-100"
        onClick={() => add100(count)}
      >
        Add 100
      </button>

      <button
        type="button"
        className="App__increase"
        onClick={() => increase(count)}
      >
        Increase
      </button>
    </div>
  );
};
