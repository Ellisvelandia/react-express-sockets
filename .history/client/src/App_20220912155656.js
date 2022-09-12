import './App.css';
import io from "socket.io-client"


const socket = io('http:')

function App() {
  return (
    <div className="App">
    Hello world
    </div>
  );
}

export default App;
