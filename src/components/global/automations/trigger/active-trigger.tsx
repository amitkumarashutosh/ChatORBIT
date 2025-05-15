import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

const ActiveTrigger = ({ keywords, type }: Props) => {
  return (
    <div className="bg-background p-3 rounded-xl w-full">
      <div className="flex gap-x-2 items-center">
        {type === "INSTAGRAM" ? <Instagram /> : <ArrowRight />}
        <p className="text-md">
          {type === "COMMENT"
            ? "User comments on my post."
            : "User sends me a direct message."}
        </p>
      </div>
      <p className="opacity-50 text-sm">
        {type === "COMMENT"
          ? "If the user comments on a video that is setup to listen for keywords, this automation will fire."
          : "If the user comments on a message that contains a  keywords, this automation will fire."}
      </p>
      <div className="flex gap-2 mt-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br from-[#3353CC] to-[#1C2D70] flex items-center gap-x-2 capitalize text-white rounded-full font-light py-1 px-4 "
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrigger;
