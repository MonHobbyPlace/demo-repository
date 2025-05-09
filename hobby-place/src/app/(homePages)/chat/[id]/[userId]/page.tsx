"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
let socket: Socket;
export default function PetCardId() {
  const { id, userId } = useParams();
  const { user } = useProfile();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (message !== "") {
      const data = {
        content: message,
        sender: user.id,
        reciever: userId,
        room: id,
      };
      socket.emit("chatMessage", data);
    }
  };

  useEffect(() => {
    // Connect to Socket.IO server
    socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}`); // Make sure this matches your backend port

    // Listen for incoming chat messages
    socket.on("chatMessage", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    socket.emit("join_room", id);

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <div>{messages}</div>
      <input
        value={message}
        type="text"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>send</button>
    </div>
  );
}
