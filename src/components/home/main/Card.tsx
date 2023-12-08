import { FC } from "react";
import { FaArrowRight, FaGithub, FaLink } from "react-icons/fa";
import { cn } from "@utils";

interface CardProps {
  className?: string;
  ttl?: string;
  disc?: string;
  src?: string;
}

const Card: FC<CardProps> = ({ className, ttl, disc,src }) => {
  return (
    <>
      <div
        className={cn(
          className,
          "border w-full border-bg-card hover:border-main-light hover:rotate-1 hover:scale-90 rounded-md"
        )}
      >
        <img src={src} className="mb-4 w-full rounded-md" />
        <div className="ml-2">
          <h1 className="text-main-title text-xl font-semibold">{ttl}</h1>
          <p className="text-sub-title py-3 text-sm">{disc}</p>
          <div className="flex justify-between mb-2">
            <div className="flex gap-4 text-xl cursor-pointer">
              <FaLink />
              <FaGithub />
            </div>
            <a className="mr-2 flex cursor-pointer items-center text-[1.1rem] text-main-light gap-1">
              More
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
