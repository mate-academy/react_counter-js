import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0); // - count → valor atual do estado.
  // - setCount → função que muda esse valor.

  const addOne = () => {
    // write code here
    setCount(prev => prev + 1); // - Aqui, o React passa para você o valor mais
    // atualizado do estado como argumento da função. Esse argumento é chamado de
    // prev (abreviação de previous state = estado anterior).
    /* Quando você chama setCount, pode passar:
- Um valor direto:
setCount(count + 1);
- Isso usa o valor atual da variável count.
- Uma função:
  setCount(prev => prev + 1)
*/
  };

  const add100 = () => {
    // write code here
    setCount(prev => prev + 100);
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
