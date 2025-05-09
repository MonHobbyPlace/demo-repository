"use client";
import { useEffect, useState } from "react";
import { ChattingArea} from "./_components/ChattingArea"
import axios from "axios";

const Chat = () => {
  const [room, setRoom] = useState("");
  const createRoom = async (values: { userId1: string; userId2: string }) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chat/conversation`,
      values
    );
    console.log(response.data.data.id
      
    );
    setRoom(response.data.data.id);
  };
  useEffect(() => {
    createRoom({ userId1: "1", userId2: "2" });
  }, []);
  return (
    <>
      <ChattingArea />
      {/* <Chat/> */}
      <div></div>
    </>
  );
};
export default Chat;
