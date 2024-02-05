import { FC } from "react";
import { cn } from "@utils";

interface ButtonProps {
  name?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({ name, className, type }) => {
  return (
    <>
      <button
        className={cn(
          className,
          "capitalize text-[1.05rem] opacity-60 py-3 bg-bg-menu rounded-md button_active hover:opacity-100"
        )}
        type={type}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
