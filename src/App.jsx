import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(currentCount => currentCount + 1);

  const add100 = () => setCount(currentCount => currentCount + 100);

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      setCount(count + 100);
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
/*
- `Add 1` button calls `addOne` method to add `1` to the `count`;
- `Add 100` button calls `add100` method to add `100` to the `count`;
- `Increase` button calls `addOne` and then, if count was divisible by 5, it additionally calls `add100`.
 */
