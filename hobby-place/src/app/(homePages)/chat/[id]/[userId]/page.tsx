"use client";
import { ProfileType, useProfile } from "@/app/provider/ProfileProvider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { MessagesBody } from "../../_components/MessagesBody";
import { ChevronLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

let socket: Socket;
export default function PetCardId() {
  const { id, userId } = useParams();
  const { user } = useProfile();
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [messages, setMessages] = useState<
    { sender: ProfileType; content: string }[]
  >([]);
  const router = useRouter();

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
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: user, content: message },
    ]);
    setMessage("");
  };

  useEffect(() => {
    // Connect to Socket.IO server
    const conv = user.conversations.filter((conv) => {
      return conv.conversation.participants[0].userId == Number(userId);
    });

    setMessages(conv[0].conversation.messages);

    socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}`); // Make sure this matches your backend port

    // Listen for incoming chat messages
    socket.on("chatMessage", (msg: { content: string; sender: number }) => {
      console.log(msg);

      if (msg.sender && msg.sender !== user.id) {
        console.log({
          sender: conv[0].conversation.participants[0].user,
          content: msg.content,
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: conv[0].conversation.participants[0].user,
            content: msg.content,
          },
        ]);
      }
    });
    socket.emit("join_room", id);

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="h-full ">
      <Button
        className="fixed top-7 left-7 rounded-full p-5 bg-[#03346E]"
        onClick={() => router.push("/chat")}
      >
        <ChevronLeft />
      </Button>
      <MessagesBody
        messages={messages}
        clicked={clicked}
        userId={Number(userId)}
      />
      <div
        className="fixed bottom-0 flex w-full p-5 gap-2 items-center"
        onClick={() => setClicked(true)}
      >
        <input
          value={message}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          className="border w-[82%] rounded-md bg-white p-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button onClick={sendMessage} className="bg-[#03346E] rounded-full p-2">
          <Send color="white" />
        </button>
      </div>
    </div>
  );
}
