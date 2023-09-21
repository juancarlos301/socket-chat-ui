import { useState, useEffect } from "react";
import io from "socket.io-client";

import { ChatsLayout, InputBar } from "./components";
import { Container, MessageContainer } from "./stylesHome";

export const Home = () => {
  const [MessagesRoom, setMessagesRoom] = useState({});
  const [currentRoom, setCurrentRoom] = useState("global_chat");

  const socket = io.connect("http://localhost:3001");

  const handleAddMessageByRoom = ({ message, room, from }) => {
    console.log(room);
    setMessagesRoom((prev) => {
      return {
        ...prev,
        [room]: [...(prev[room] || []), { from: from, message: message }],
      };
    });
  };
  console.log(MessagesRoom);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("byUSeefect");
      handleAddMessageByRoom(data);
    });
  }, [socket]);

  return (
    <Container>
      <div className="container-pick-chats">
        <ChatsLayout
          setCurrentRoom={setCurrentRoom}
          currentRoom={currentRoom}
          socket={socket}
        />
      </div>
      <div className="container-current-chat">
        <InputBar
          currentRoom={currentRoom}
          socket={socket}
          setMessagesRoom={setMessagesRoom}
          handleAddMessageByRoom={handleAddMessageByRoom}
        />
        <div className={`all-messages-container`}>
          {(MessagesRoom[currentRoom] || []).map((item, i) => (
            <MessageContainer mymessage={item.from === "me"} key={i}>
              <p>{item.message}</p>
            </MessageContainer>
          ))}
        </div>
      </div>
    </Container>
  );
};
