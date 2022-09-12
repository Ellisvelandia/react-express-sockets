import "./App.css";
import io from "socket.io-client";
import {useState}

const socket = io("http://localhost:4000");

function App() {
  return(
  <div className="App">
    <form>
      <input type="text" />
      <button>Send</button>
    </form>
    </div>
  )
  
}

export default App;
