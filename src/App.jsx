import { useState } from 'react';
import './App.scss';

/**
 * Componente principal do contador
 * Gerencia um contador com três formas de incremento
 */
export const App = () => {
  // Estado do contador, inicializado em 0
  const [count, setCount] = useState(0);

  /**
   * Incrementa o contador em 1
   * Usa a forma funcional do setState para garantir o valor mais recente
   */
  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  /**
   * Incrementa o contador em 100
   * Usa a forma funcional do setState para garantir o valor mais recente
   */
  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  // DON'T change the code below
  /**
   * Função especial de incremento:
   * - Se count é divisível por 5, adiciona 100 primeiro
   * - Sempre adiciona 1 depois
   * Sequência: 0→101, 101→102, 102→103, 103→104, 104→105, 105→206...
   */
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      {/* Exibe o valor atual do contador */}
      <h1 className="App__title">{`Count: ${count}`}</h1>

      {/* Botão para adicionar 1 */}
      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      {/* Botão para adicionar 100 */}
      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      {/* Botão para incremento condicional */}
      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
