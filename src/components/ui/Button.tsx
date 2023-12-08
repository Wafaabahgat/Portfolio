import { FC } from "react";

interface ButtonProps {
  name?: string;
}

const Button: FC<ButtonProps> = ({ name }) => {
  return (
    <>
      <button className="capitalize text-[1.05rem] opacity-60 py-2 bg-bg-menu rounded-md button_active hover:opacity-100">{name}</button>
    </>
  );
};

export default Button;
