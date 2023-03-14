import "./App.css";
import ClickCounter from "./render-prop/ClickCounter";
import Counter from "./render-prop/Counter";

function App() {
  return (
    <div>
      <Counter>
        {(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
