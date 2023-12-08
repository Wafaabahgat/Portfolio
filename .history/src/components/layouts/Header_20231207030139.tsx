import { FC } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "../../utils";

interface HeaderProps {}

const links = [
  {
    link: "/about",
    name: "about",
  },
  {
    link: "/articles",
    name: "articles",
  },
  {
    link: "/projects",
    name: "projects",
  },
  {
    link: "/speaking",
    name: "speaking",
  },
  {
    link: "/contact",
    name: "contact",
  },
];

const Header: FC<HeaderProps> = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="mt-10">
        <nav className="flex gap-2 py-2 border-h rounded-full w-[50%] mx-auto">
          <ul>
            
          </ul>
          {links?.map((e, i) => (
            <li
              key={i}
              a={e?.link}
              className="capitalize text-[18px] mx-auto hover:text-main-light"
            >
              {e?.name}
            </li>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
