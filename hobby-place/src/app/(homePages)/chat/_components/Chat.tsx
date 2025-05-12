/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";

export const Chat = (props: {
  sender: { profileImage: string; username: string; id: number };
  roomId: number;
}) => {
  const { sender, roomId } = props;
  const router = useRouter();
  return (
    <div
      className="flex gap-5 items-center"
      onClick={() => {
        router.push(`/chat/${roomId}/${sender.id}`);
      }}
    >
      <div className="w-[45px] h-[50px]">
        <img
          src={sender.profileImage}
          alt="sender profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div>{sender.username}</div>
    </div>
  );
};
