import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => setState((prev) => prev + 1)}>+</button>
      <button onClick={() => setState((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default App;
