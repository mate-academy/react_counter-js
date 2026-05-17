import { useState } from 'react';
import './App.scss';

export const App = () => {
  // Створюємо стан лічильника.
  // count — поточне значення, setCount — функція для його оновлення.
  const [count, setCount] = useState(0);

  // Функція для додавання 1
  const addOne = () => {
    // Використовуємо функціональне оновлення (prevCount => ...).
    // Це гарантує, що ми завжди беремо останнє актуальне значення лічильника,
    // навіть якщо кілька оновлень відбуваються дуже швидко одне за одним.
    setCount(prevCount => prevCount + 1);
  };

  // Функція для додавання 100
  const add100 = () => {
    // Працює за тим же принципом: беремо попередній стан і додаємо до нього 100.
    // Це критично важливо для коректної роботи функції increase.
    setCount(prevCount => prevCount + 100);
  };

  // Цю функцію ми НЕ змінюємо за умовою завдання
  const increase = () => {
    // Перевірка: чи ділиться поточне значення count на 5 без залишку.
    if (count % 5 === 0) {
      add100(); // Якщо ділиться, спочатку додаємо 100
    }

    addOne(); // Потім у будь-якому випадку додаємо 1
  };

  return (
    <div className="App">
      {/* Виводимо поточне значення лічильника в заголовку */}
      <h1 className="App__title">{`Count: ${count}`}</h1>

      {/* Кнопка "Add 1" викликає функцію addOne */}
      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      {/* Кнопка "Add 100" викликає функцію add100 */}
      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      {/* Кнопка "Increase" викликає функцію increase зі складною логікою */}
      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
