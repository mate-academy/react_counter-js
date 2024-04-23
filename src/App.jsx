import { useState } from 'react';
import './App.scss';
import { getButtons } from './helpers/getButtons';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prevState => prevState + 1);
  };

  const add100 = () => {
    setCount(prevState => prevState + 100);
  };

  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  const buttons = getButtons(addOne, add100, increase);

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      {buttons.map(({ text, className, onClick }) => (
        <button type="button" className={className} onClick={onClick}>
          {text}
        </button>
      ))}
    </div>
  );
};
