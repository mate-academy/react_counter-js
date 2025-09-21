import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  // Функція для додавання 1
  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Функція для додавання 100
  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  // Оновлена функція increase
  const increase = () => {
    setCount(prevCount => {
      // Якщо попереднє значення ділиться на 5, додаємо 100
      let newCount = prevCount;
      if (newCount % 5 === 0 && newCount !== 0) {
        newCount += 100;
      }

      // Після цього додаємо 1
      newCount += 1;

      // Повертаємо фінальне значення
      return newCount;
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
