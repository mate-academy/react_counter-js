import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(100);

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  // DON'T change the code below
  const increase = () => {

    const newCount = count + 1;
     addOne();

    if (newCount % 5 === 0) {
      add100();
    }

   
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
        Increase (Add 1, plus 100 on multiples of 5)
      </button> 
    </div>
  );
};
export default App;
