import { FC } from "react";
import Hero from "../components/"
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Home;
