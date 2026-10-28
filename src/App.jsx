import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  const increase = () => {
    addOne();

    if (count === 0) {
      add100();
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title App__title">Count: {count}</h1>

        <div className="buttons">
          <button
            type="button"
            className="button is-success App__add-one"
            onClick={addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="button is-info App__add-100"
            onClick={add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="button is-warning App__increase"
            onClick={increase}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};
