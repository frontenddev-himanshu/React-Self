import { useState } from "react";
import "./App.css";

// this is also interview question
function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 5

  const addValue = () => {
    if (counter < 50) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button className="btn" onClick={addValue}>
        Add value
        {counter}
      </button>

      <button className="btn" onClick={removeValue}>
        Remove value {counter}
      </button>
    </>
  );
}

export default App;
