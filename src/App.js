import io from "socket.io-client";
//import "./App.css";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");

  const [messageReceived, setMessageReceived] = useState("");

  const sendMessages = () => {
    socket.emit("send_message", { message, room });
  };

  const joinRoom = () => {
    socket.emit("join_room", room);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
    // eslint-disable-next-line
  }, [socket]);

  return (
    <div className="App">
      <input
        placeholder="put room"
        onChange={(e) => setRoom(e.target.value)}
        value={room}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            joinRoom();
            setRoom("");
          }
        }}
      />
      <button onClick={joinRoom}>send message</button>
      <input
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            sendMessages();
            setMessage("");
          }
        }}
      />
      <button onClick={sendMessages}>send message</button>
      <h1>messages</h1>
      {messageReceived}
    </div>
  );
}

export default App;
