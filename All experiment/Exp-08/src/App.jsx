import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <main className="container">
      <h1>Counter App</h1>
      <p className="subtitle">Experiment 8: State Management using `useState`</p>

      <div className="counter-card">
        <p className="label">Current Count</p>
        <h2>{count}</h2>

        <label htmlFor="stepInput" className="step-label">
          Step Value:
        </label>
        <input
          id="stepInput"
          type="number"
          min="1"
          value={step}
          onChange={(event) => setStep(Number(event.target.value) || 1)}
        />

        <div className="buttons">
          <button type="button" onClick={increment}>
            + Increment
          </button>
          <button type="button" onClick={decrement}>
            - Decrement
          </button>
          <button type="button" onClick={reset} className="reset-btn">
            Reset
          </button>
        </div>
      </div>

      {/* <p className="note">Click a button → state updates → UI re-renders instantly.</p> */}
      <p className="note">Created By Tushar Chaudhary</p>
    </main>
  );
}

export default App;