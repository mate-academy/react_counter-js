import { useState } from 'react';
import './App.scss';

import { AddButton } from './components/AddButton';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(currentCount => currentCount + 1);
  };

  const add100 = () => {
    setCount(currentCount => currentCount + 100);
  };

  const increase = () => {
    if (count % 5 === 0) {
      add100(count);
    }

    addOne(count);
  };

  return (
    <div className="App">
      <h1 className="App__title">
        {`Count: ${count}`}
      </h1>
      <div className="buttons">
        <AddButton
          text="Add 1"
          callback={addOne}
          classname="App__add-one"
        />
        <AddButton
          text="Add 100"
          callback={add100}
          classname="App__add-100"
        />
        <AddButton
          text="Increase"
          callback={increase}
          classname="App__increase"
        />
      </div>
    </div>
  );
};
