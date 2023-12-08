import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <>
      <div className="mt-10">
        <div>
          <h1 className="text-white font-semibold text-[40px] capitalize">
            frontend react.js
          </h1>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Hero;
