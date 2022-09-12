import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState(""); 
  const [messages, setMessages] = useState([{
    body: "message test",
    from: "user1"
  }])

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    const receiveMessage = (message) => {
      console.log(message);
    };
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>
      {message.map(message => (
        <div>
          <p>{message.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
