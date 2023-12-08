import { FC } from "react";
import { useLocation,Link } from "react-router-dom";
import { cn } from "../../utils";

interface HeaderProps {}

const links = [
    {
      link: "/",
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
      link: "/about-us",
      name: "contact",
    },
];

const Header: FC<HeaderProps> = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div>
        <div>
          <nav>
            {links?.map((e, i) => (
              <Link
                key={i}
                to={e?.link}
                className={cn(
                  pathname === e?.link
                    ? "text-main-light font-semibold"
                    : "text-main",
                  "capitalize text-[18px] whitespace-nowrap"
                )}
              >
                {e?.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
