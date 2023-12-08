import { FC } from "react";
import card1 from "@assets/1.jpg";
import { FaArrowRight, FaGithub, FaLink } from "react-icons/fa";
import { cn } from "@utils";

interface CardProps {
  className?: string;
}

const Card: FC<CardProps> = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          className,
          "border w-[290px] border-bg-card hover:border-main-light rounded-md"
        )}
      >
        <img src={card1} width={290} className="mb-4 rounded-md" />
        <div className="ml-2">
          <h1 className="text-main-title text-xl font-semibold">
            landing page 2
          </h1>
          <p className="text-sub-title py-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            tortor et enim porttitor aliquam nec a mauris. Nunc mi odio.
          </p>
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
