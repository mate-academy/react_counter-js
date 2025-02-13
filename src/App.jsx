/* eslint-disable react/button-has-type */
import { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(prev => prev + 1);
  const add100 = () => setCount(prev => prev + 100);
  const increase = () => {
    if (count === 0 || count === 100) {
      setCount(prev => prev + 101);
    } else {
      addOne();
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">Counter: {count}</h1>
      <button className="App__add-one" onClick={addOne}>
        Add 1
      </button>
      <button className="App__add-100" onClick={add100}>
        Add 100
      </button>
      <button className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default App;
