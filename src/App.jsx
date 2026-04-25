import { useState } from 'react';
import './App.scss';

export const App = () => {
  // Додаємо setCount для можливості змінювати стан
  const [count, setCount] = useState(0);

  const addOne = () => {
    // Використовуємо функцію, щоб отримати актуальне попереднє значення
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    // Аналогічно для додавання 100
    setCount(prevCount => prevCount + 100);
  };

  // Цю частину ми не змінюємо за умовою
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
