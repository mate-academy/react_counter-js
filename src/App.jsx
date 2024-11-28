import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  // const [goods, setGoods] = useState(initialGoods);

  // function moveUp(good) {
  //   // знаходимо поточний індекс елемента
  //   const index = goods.indexOf(good);

  //   // міняємо його місцями з попереднім
  //   goods[index] = goods[index - 1];
  //   goods[index - 1] = good;

  //   setGoods(goods);
  // }

  const addOne = () => {
    setCount(countCurrrent => {
      let countAdd = countCurrrent;

      countAdd += 1;

      return countAdd;
    });
  };

  const add100 = () => {
    setCount(countCurrrent => {
      let countAdd = countCurrrent;

      countAdd += 100;

      return countAdd;
    });
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
