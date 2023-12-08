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
      <div className="">
        <nav className="flex gap-5 py-2 border-h rounded-full w-[60%] mx-auto ">
          {links?.map((e, i) => (
            <Link
              key={i}
              to={e?.link}
              className={cn(
                pathname === e?.link
                  ? "text-main-light font-semibold"
                  : "text-white ",
                "capitalize text-[18px] whitespace-nowrap mx-auto"
              )}
            >
              {e?.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
