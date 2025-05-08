"use client";
import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Connect to Socket.IO server
    socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}`); // Make sure this matches your backend port

    // Listen for incoming chat messages
    socket.on("chatMessage", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSend = () => {
    if (message.trim() !== "") {
      socket.emit("chatMessage", message);
      socket.emit("id", 1);
      setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Socket.IO Chat</h2>
      <div>
        <input
          type="text"
          value={message}
          placeholder="Enter message..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
