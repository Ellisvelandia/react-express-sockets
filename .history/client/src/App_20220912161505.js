import "./App.css";
import io from "socket.io-client";
import {useState} from "react"

const socket = io("http://localhost:4000");

function App() {

  const [message, setMessage] = useState('');

  return(
  <div className="App">
    <form>
      <input type="text" O/>
      <button>Send</button>
    </form>
    </div>
  )
  
}

export default App;
