import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <>
      <div className="mt-10">
        <div>
          <h1 className="text-white font-semibold text-4xl capitalize">
            frontend react.js
          </h1>
          <p className=" text-gray-400 text-md">
            A Junior web developer skilled in creating responsive web
            applications. Passionate about learning new technologies and working
            with dedicated teams to build efficient and robust applications that
            fit user needs. Meet a skilled front-end developer with 2 years of
            experience in Reactjs. Equipped with experience in Tailwindcss.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
