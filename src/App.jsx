import { useState } from 'react';
import './App.scss';

export const App = () => {
  const useStateVariable = useState(0);
  let count = useStateVariable[0];
  const setCount = useStateVariable[1];

  const addOne = () => {
    setCount(count + 1);
  };

  const add100 = () => {
    count += 100;

    setCount((count));
  };

  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">
        {`Count: ${count}`}
      </h1>

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
