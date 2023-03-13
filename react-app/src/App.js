import "./App.css";
import Memo from "./hooks/Memo";

function App() {
  
  // const {loading,data,error} = useFetch('https://jsonplaceholder.typicode.com/todos');
  
  return (
   <div>
    {/* <Counter/>
    <List/>
    <Create name={"Shourov"}/>
    <Ref/> */}
    <Memo/>
   </div>
  );
}

export default App;
