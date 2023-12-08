import { FC } from "react";
import avatar from "../../assets/avatar1.png";
import { MdVerified } from "react-icons/md";
import { FaFacebookSquare , FaLinkedin , FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Lottie from "lottie-"

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <>
      <div className="mt-20 grid md:grid-cols-2 grid-cols-1">
        <div className=" ml-20">
          <div className="flex mb-5 items-end gap-4">
            <img
              src={avatar}
              className="w-48 border-border-menu border-4 rounded-full"
            />
            <MdVerified className="text-2xl text-main-light mb-10" />
          </div>
          <h1 className="text-main-title font-semibold md:text-5xl text-3xl capitalize">
            frontend react.js
          </h1>
          <p className=" text-sub-title md:text-[16px] text-[12px] px-1 my-6">
            A Junior web developer skilled in creating responsive web
            applications. Passionate about learning new technologies and working
            with dedicated teams to build efficient and robust applications that
            fit user needs. Meet a skilled front-end developer with 2 years of
            experience in Reactjs. Equipped with experience in Tailwindcss.
          </p>
          <div className="flex gap-6">
            <FaGithub className="text-2xl hover:text-3xl " />
            <FaLinkedin  className="text-2xl hover:text-3xl" />
            <FaFacebookSquare  className="text-2xl hover:text-3xl" />
            <FiTwitter className="text-2xl hover:text-3xl" />
          </div>
        </div>
        <div className="m-auto">
          <Lottie className="" style={{height:355}} animationData={herobg}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
