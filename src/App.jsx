import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  // для setCount прописуєм колбек, який має змогу памятати попереднє значення Count
  const addOne = () => {
    setCount(prev => prev + 1);
  };

  const add100 = () => {
    setCount(prev => prev + 100);
  };

  const clear = () => {
    setCount(0);
  };

  // тут спрацьовує того шо 0 % 5 === 0, спочатку додає 100 а потім 1
  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
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

      <button type="button" className="App__clear" onClick={clear}>
        clear
      </button>
    </div>
  );
};
