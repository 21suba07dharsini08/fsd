
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  // useState: Manage counter value
  const [count, setCount] = useState(0);

  // useRef: Refer to the input element
  const inputRef = useRef(null);

  // useEffect: Update browser tab title
  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  // useMemo: Calculate square of counter
  const square = useMemo(() => {
    return count * count;
  }, [count]);

  // useCallback: Reusable increment function
  const increment = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  // Focus the input element
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h1>React Hooks Demonstration</h1>
      <h2>Experiment No. 09</h2>

      <div className="card">
        <h3>1. useState</h3>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount((c) => c - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="card">
        <h3>2. useEffect</h3>
        <p>Browser title updates when the counter changes.</p>
        <p>Current count: {count}</p>
      </div>

      <div className="card">
        <h3>3. useRef</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
        />
        <button onClick={focusInput}>Focus Input</button>
      </div>

      <div className="card">
        <h3>4. useMemo</h3>
        <p>Square of {count} = {square}</p>
      </div>

      <div className="card">
        <h3>5. useCallback</h3>
        <p>Increment function is reused between renders.</p>
        <button onClick={increment}>Increment using Callback</button>
      </div>
    </div>
  );
}

export default App;
