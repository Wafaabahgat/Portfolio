import { FC } from "react";
import Hero from "@components/home/Hero";
import Main from "@components/home/main/Main";
import Contact from "@components/home/Contact";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Main />
        <Contact />
      </div>
    </>
  );
};

export default Home;
