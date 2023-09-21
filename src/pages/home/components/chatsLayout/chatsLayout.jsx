import { useCallback, useEffect, useState } from "react";
import { Container, RoomItem } from "./stylesChatsLayout";

export const ChatsLayout = ({ setCurrentRoom, currentRoom, socket }) => {
  const [roomsList, setRoomList] = useState(["global_chat"]);

  const joinRoom = useCallback((newRoom) => {
    socket.emit("join_room", newRoom);
  }, []);

  useEffect(() => {
    console.log("me uni a la room global");
    joinRoom(currentRoom);
  }, [currentRoom, joinRoom]);

  const handlePickRoom = (newRoom) => {
    if (newRoom === currentRoom) {
      return;
    }
    setCurrentRoom(newRoom);
    joinRoom(newRoom);
  };

  return (
    <Container>
      {roomsList.map((room) => (
        <RoomItem
          key={room}
          selected={room === currentRoom}
          onClick={() => handlePickRoom(room)}
        >
          {room}
        </RoomItem>
      ))}
    </Container>
  );
};
