import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0); // Initialize count state

    // Function to add 1 to the count
    const addOne = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Function to add 100 to the count
    const add100 = () => {
        setCount(prevCount => prevCount + 100);
    };

    // Function for the "Increase" button
    const increase = () => {
        addOne(); // Call addOne
        if ((count + 1) % 5 === 0) { // Check if the count (after adding 1) is divisible by 5
            add100(); // Add 100
        }
    };

    return (
        <div className="App">
            <h1>React Counter</h1>
            <h2>{`Count: ${count}`}</h2>

            <div className="buttons">
                <button
                    className="button is-primary"
                    onClick={addOne}
                >
                    Add 1
                </button>

                <button
                    className="button is-success"
                    onClick={add100}
                >
                    Add 100
                </button>

                <button
                    className="button is-warning"
                    onClick={increase}
                >
                    Increase
                </button>
            </div>
        </div>
    );
}

export default App;
