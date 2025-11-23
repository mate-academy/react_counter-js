import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  // const addOne = () => {
  //   setCount(() => count + 1);
  // };

  // const add100 = () => {
  //   setCount(() => count + 1);
  // };

  const addOne = () => {
    setCount(newCount => newCount + 1);
  };

  const add100 = () => {
    setCount(newCount => newCount + 100);
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

// Закоментированный код не работает т.к.
// Коротко: логика increase не работает с закомментированным кодом,
// потому что внутри increase ты используешь текущее значение count,
// которое не обновляется сразу, а setCount — асинхронный.

// ❌ setCount(() => count + 1)
// Использует старое значение count → логика increase ломается.

// ✅ setCount(prev => prev + 1)
// Всегда использует актуальное значение, даже при нескольких вызовах подряд → всё работает.
// Если обновление зависит от предыдущего состояния → всегда используй функциональный апдейт
