/* eslint-disable @next/next/no-img-element */
import { useProfile } from "@/app/provider/ProfileProvider";
import { cn } from "@/lib/utils";
export const MessageBox = (props: {
  sender: { profileImage: string; id: number };
  message: string;
}) => {
  const { sender, message } = props;
  const { user } = useProfile();

  return (
    <div
      className={cn(
        "gap-2 items-end  flex",
        user.id !== sender.id ? "" : "flex-row-reverse "
      )}
    >
      <div className="w-[30px] h-[30px]">
        <img
          src={sender.profileImage}
          alt="sender profileImage"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div
        className={cn(
          "p-2 border rounded-md max-w-[90%] flex gap-2 items-end ",
          user.id !== sender.id
            ? "bg-[#90e0ef] justify-start"
            : "flex-row-reverse justify-end"
        )}
      >
        <p className="break-words whitespace-pre-wrap w-full">{message}</p>
      </div>
    </div>
  );
};
