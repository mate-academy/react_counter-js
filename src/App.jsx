import { useState } from 'react';
import './App.scss';

// Função utilitária para verificar se um número é múltiplo de 5
const isMultipleOf5 = number => number % 5 === 0;

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  const increase = () => {
    setCount(prev => {
      const newValue = prev + 1;

      return isMultipleOf5(prev) ? newValue + 100 : newValue;
    });
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
