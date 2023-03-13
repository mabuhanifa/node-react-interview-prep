import "./App.css";
import Counter from "./components/Counter";
import { Create, List } from "./components/Create";
import Ref from "./components/Ref";
import useFetch from "./custom-hooks/useFetch";

function App() {
  
  const {loading,data,error} = useFetch('https://jsonplaceholder.typicode.com/todos');
  
  return (
   <div>
    <Counter/>
    <List/>
    <Create name={"Shourov"}/>
    <Ref/>
   </div>
  );
}

export default App;
