import { FC } from "react";
import Container from "../ui/Container";
import { Logo } from "@assets/Logo";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "@/utils";

interface HeaderProps {}

const links = [
  {
    link: "/",
    name: "home",
  },
  {
    link: "/services",
    name: "services",
  },
  {
    link: "/blog",
    name: "blog",
  },
  {
    link: "/about-us",
    name: "about us",
  },
];

const Header: FC<HeaderProps> = () => {
  // const { pathname } = useLocation();

  return (
    <></>
  );
};

export default Header;
