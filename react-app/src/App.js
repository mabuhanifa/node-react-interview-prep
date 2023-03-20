import "./App.css";
import { useSelector } from "./context-api/api";
import Render from "./render-prop/Render";

function App() {
  const data = useSelector((s) => s.data);
  console.log(data);
  return (
    <div>
      <Render />
    </div>
  );
}

export default App;
