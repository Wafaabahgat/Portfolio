import { FC } from "react";

interface HeaderProps {}

const links = [
  {
    href: "/about",
    name: "about",
  },
  {
    href: "/articles",
    name: "articles",
  },
  {
    href: "/projects",
    name: "projects",
  },
  {
    href: "/speaking",
    name: "speaking",
  },
  {
    href: "/contact",
    name: "contact",
  },
];

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <div className="mt-10">
        <nav className="max-w-[48%] mx-auto">
          <ul className="flex  py-3   rounded-full">
            {links?.map((e, i) => (
              <li
                key={i}
                className="capitalize text-[18px] mx-auto hover:text-main-light hover:text-[20px]"
              >
                <a href={e?.href}>{e?.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
