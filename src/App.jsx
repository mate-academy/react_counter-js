import { useState } from 'react';
import 'bulma/css/bulma.css';

import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(currentCount => currentCount + 1);
  };

  const add100 = () => {
    setCount(currentCount => currentCount + 100);
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
      <h1 className="App__title title is-2">
        {`Count: ${count}`}
      </h1>

      <button
        type="button"
        className="App__add-one button is-primary"
        onClick={addOne}
      >
        Add 1
      </button>

      <button
        type="button"
        className="App__add-100 button is-info"
        onClick={add100}
      >
        Add 100
      </button>

      <button
        type="button"
        className="App__increase button is-link"
        onClick={increase}
      >
        Increase
      </button>
    </div>
  );
};
