import { useState } from 'react';
import './App.scss';

export const App = () => {
  // const [count] = useState(0);
  const [count, setCount] = useState(0);

  const addOne = () => {
    // write code here
    setCount(count + 1);
  };

  const add100 = () => {
    // write code here
    setCount(count + 100);
  };

  // DON'T change the code below
  // const increase = () => {
  //   if (count % 5 === 0) {
  //     add100();
  //   }

  //   addOne();
  // };
  const increase = () => {
    const newCount = count + 1;

    setCount(newCount);

    if (newCount % 5 === 1) {
      setCount(newCount + 100);
    } else {
      setCount(newCount);
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
