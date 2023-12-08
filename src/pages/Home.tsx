import { FC } from "react";
import Hero from "@components/home/Hero";
import Main from "@components/home/main/Main";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Main/>

        
      </div>
    </>
  );
};

export default Home;
