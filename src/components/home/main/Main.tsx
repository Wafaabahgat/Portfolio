import { FC } from "react";
import Button from "../../ui/Button";
import Card from "./Card";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <>
      <div className="flex justify-center md:flex-row flex-col  lg:gap-16 gap-10 ">
        <section className="flex flex-col ml-20 gap-3 w-[11rem] text-main-title">
          <Button name="all projects" />
          <Button name="html & css" />
          <Button name="javaScript" />
          <Button name="react" />
          <Button name="tailwind" />
        </section>

        {/* card */}
        <section className="grid lg:grid-cols-2 gap-10 grid-cols-1 ">
          <Card className=" mx-auto"/>
          <Card className="mx-auto"/>
          <Card className="mx-auto"/>
          <Card className="mx-auto"/>
        
        </section>
      </div>
    </>
  );
};

export default Main;
