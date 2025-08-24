import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(prev => prev + 1);
  const add100 = () => setCount(prev => prev + 100);

  // Increase: soma 1 e, se o valor inicial for múltiplo de 5, soma +100
  const increase = () => {
    setCount(prev => {
      if (prev % 5 === 0) {
        // se o valor atual é múltiplo de 5
        return prev + 101; // soma 1 + 100
      }

      return prev + 1; // senão apenas soma 1
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
