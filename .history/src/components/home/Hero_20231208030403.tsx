import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <>
      <div className="mt-10">
        <div>
          <h1 className="text-white font-semibold">frontend react.js</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
