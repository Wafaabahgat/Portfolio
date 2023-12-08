import { FC } from "react";
import avatar from "../../assets/avatar1.png";
import { MdVerified } from "react-icons/md";
import { FaFacebookF, FaLinkedin,FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <>
      <div className="mt-10">
        <div>
          <div className="flex items-end gap-4">
            <img
              src={avatar}
              className="w-[20%] border-border-menu border-4 rounded-full"
            />
            <MdVerified className="text-2xl text-main-light mb-10" />
          </div>
          <h1 className="text-main-title font-semibold text-5xl mb-2 capitalize">
            frontend react.js
          </h1>
          <p className=" text-sub-title text-md mb-3">
            A Junior web developer skilled in creating responsive web
            applications. Passionate about learning new technologies and working
            with dedicated teams to build efficient and robust applications that
            fit user needs. Meet a skilled front-end developer with 2 years of
            experience in Reactjs. Equipped with experience in Tailwindcss.
          </p>
          <div className="flex gap-4 ">
            <FaGithub className="text-2xl border-border-menu border"/>
            <FaLinkedin />
            <FaFacebookF />
            <FiTwitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
