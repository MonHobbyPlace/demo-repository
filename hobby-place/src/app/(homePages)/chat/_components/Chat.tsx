"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3300"); // your backend server

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    const newMsg = {
      senderId: 1,
      receiverId: 2,
      content: message,
      conversationId: 123,
    };
    // Send via HTTP to save in DB
    fetch("http://localhost:3300/chat/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMsg),
    });

    // Emit via WebSocket
    socket.emit("chatMessage", newMsg);
    setMessage("");
  };

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, []);

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg.content}</p>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
