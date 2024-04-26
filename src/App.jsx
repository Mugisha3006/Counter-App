import "./App.css";
import {useState} from "react";

function App() {

  let [count, setCount] = useState(0)
  
  function addCount() {
    setCount(count + 1)
  }

  function subtractCount() {
    setCount(count - 1)
  }

  return (
    <div id="container">
      <h1>Counter Application</h1>

      <section id="section" >
        <h1>{count}</h1>

        <button id="button" onClick={addCount}>+</button>
        <button id="button" onClick={subtractCount}>-</button>
      </section>
    </div>
  )
}
export default App;