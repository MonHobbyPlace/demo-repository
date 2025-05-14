import { ProfileType, useProfile } from "@/app/provider/ProfileProvider";
import { useEffect, useRef, useState } from "react";
import { MessageBox } from "./MessageBox";
import { cn } from "@/lib/utils";

export const MessagesBody = (props: {
  messages: { sender: ProfileType; content: string }[];
  clicked: boolean;
  userId: number;
}) => {
  const { messages, clicked, userId } = props;
  const { user } = useProfile();
  const [partner, setPartner] = useState({} as unknown as ProfileType);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, clicked]);
  useEffect(() => {
    const conv = user.conversations.filter((conv) => {
      return conv.conversation.participants[0].userId == Number(userId);
    });
    setPartner(conv[0].conversation.participants[0].user);
  }, []);

  return (
    <div
      className={cn(
        " gap-2 bg-white p-5 rounded-md h-[90%] overflow-scroll scroll-hide justify-end"
        // clicked && "h-[73%]"
      )}
      ref={containerRef}
    >
      <div className="w-full flex flex-col items-center gap-3">
        <img
          src={partner.profileImage}
          alt=""
          className="w-[100px] h-[100px] rounded-full object-cover"
        />
        <p className="font-bold">{partner.username}</p>
      </div>
      {messages.map((msg, index) => {
        return (
          <MessageBox key={index} sender={msg.sender} message={msg.content} />
        );
      })}
    </div>
  );
};
