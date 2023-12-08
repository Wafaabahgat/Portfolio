import { FC } from "react";

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
  return (
    <>
      <div className="mt-10">
        <nav >
          <ul >
            {links?.map((e, i) => (
              <li
                key={i}
                a={e?.link}
                className="capitalize text-[18px] mx-auto hover:text-main-light"
              >
                {e?.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
