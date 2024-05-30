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
      <h1 id="count">Counter Application</h1>

      <section id="section" >
        <h1 id="count">{count}</h1>
        <div id="buttons">
          <button id="button" onClick={addCount}>+</button>
          <button id="button" onClick={subtractCount}>-</button>
        </div>
      </section>
    </div>
  )
}
export default App;