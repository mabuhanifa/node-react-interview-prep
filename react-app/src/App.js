import "./App.css";
import Counter from "./components/Counter";
import useFetch from "./custom-hooks/useFetch";

function App() {
  
  const {loading,data,error} = useFetch('https://jsonplaceholder.typicode.com/todos');
  
  return (
   <div>
    <Counter/>
   </div>
  );
}

export default App;
