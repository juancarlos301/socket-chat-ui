import { useState } from "react";

import { Container } from "./stylesInputBar";

export const InputBar = ({
  currentRoom,
  setMessagesRoom,
  socket,
  handleAddMessageByRoom,
}) => {
  const [message, setMessage] = useState("");

  const sendMessages = () => {
    if (message.length === 0) {
      return;
    }
    socket.emit("send_message", { message, room: currentRoom });
    console.log("by input");

    handleAddMessageByRoom({ message, room: currentRoom, from: "me" });
    setMessage("");
  };

  return (
    <Container>
      <input
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessages();
          }
        }}
      />
      <button onClick={sendMessages}>send message</button>
    </Container>
  );
};
