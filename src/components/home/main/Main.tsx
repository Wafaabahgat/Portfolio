import { FC } from "react";
import Button from "../../ui/Button";
import Card from "./Card";
import card1 from "@assets/1.jpg";
import card2 from "@assets/2.jpg";
import card3 from "@assets/2.jpg";
import card4 from "@assets/3.jpg";
import card5 from "@assets/d.png";
import card6 from "@assets/6.jpg";
import card7 from "@assets/q.png";
import card8 from "@assets/8.jpg";
import card9 from "@assets/9.jpg";

interface MainProps {}

const cards = [
  {
    ttl: "landing page 1",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card1,
  },
  {
    ttl: "landing page 2",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card2,
  },
  {
    ttl: "landing page 3",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card3,
  },
  {
    ttl: "landing page 4",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card4,
  },
  {
    ttl: "landing page 5",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card5,
  },
  {
    ttl: "landing page 6",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card6,
  },
  {
    ttl: "landing page 7",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card7,
  },
  {
    ttl: "landing page 7",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card8,
  },
  {
    ttl: "landing page 9",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer et,tortor et enim porttitor aliquam nec a mauris Nunc mi odio",
    src: card9,
  },
];

const Main: FC<MainProps> = () => {
  return (
    <>
      <div className="flex justify-center md:flex-row flex-col gap-10">
        <section className="flex flex-col ml-20 gap-4 w-[11rem] text-main-title">
          <Button name="all projects" />
          <Button name="html & css" />
          <Button name="javaScript" />
          <Button name="react" />
          <Button name="tailwind" />
        </section>

        {/* card */}
        <section className="grid gap-4 px-2 grid-cols-plog w-full ">
          {cards.map((e, i) => (
            <Card key={i} ttl={e.ttl} disc={e.disc} src={e.src} />
          ))}
        </section>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Main;
