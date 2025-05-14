"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { ChattingArea } from "./_components/ChattingArea";
import { Chat } from "./_components/Chat";
import { useState } from "react";

const Home = () => {
  const { user } = useProfile();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col gap-3 h-full ">
      <p className="font-bold text-2xl text-[#03346E]">Chats</p>
      <ChattingArea searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="flex flex-col gap-2 py-5 bg-white p-2 rounded-md bg-white h-[85%] overflow-scroll">
        {user?.conversations
          ?.filter((conv) => {
            return conv.conversation.participants[0].user.username.includes(
              searchValue
            );
          })
          .map((conv, index) => {
            return (
              <Chat
                key={index}
                sender={conv.conversation.participants[0].user}
                roomId={conv.conversationId}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Home;
