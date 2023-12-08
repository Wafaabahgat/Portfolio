import { FC } from "react";
import Hero from "../components/home/Hero";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <div className="flex-1">
        <Hero />
      </div>
    </>
  );
};

export default Home;
