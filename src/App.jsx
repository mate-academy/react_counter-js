/* eslint-disable react/button-has-type */
import { useState } from 'react';
import './App.scss';

function App() {
  const [counter, setCount] = useState(0);

  const addOne = () => setCount(prev => prev + 1);
  const add100 = () => setCount(prev => prev + 100);
  const increase = () => {
    if (counter === 0 || counter === 100) {
      setCount(prev => prev + 101);
    } else {
      addOne();
    }
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
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
