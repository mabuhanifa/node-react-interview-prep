import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Render() {
  return (
    <div className="app">
      <Counter>
        {(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}
