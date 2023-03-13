import React, { useState } from "react";
import { useStore } from "../context-api/api";

export default function Counter() {
  const [states, setStates] = useState(0);
  
  const {
    state: { value },
    dispatch,
  } = useStore();

  return (
    <div>
      <div>
        <h2>{states}</h2>
        <button onClick={() => setStates((prev) => prev + 1)}>+</button>
        <button onClick={() => setStates((prev) => prev - 1)}>-</button>
      </div>
      <div>
        <h2>{value}</h2>
        <button
          onClick={() =>
            dispatch({
              type: "add",
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "add",
            })
          }
        >
          -
        </button>
      </div>
    </div>
  );
}
