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
      <div className="mt-10 ">
        <div className="flex">
          <nav className="lg:max-w-[50%] mx-auto">
            <ul className="flex py-3 gap-4 px-10 bg-bg-header rounded-full ">
              {links?.map((e, i) => (
                <li
                  key={i}
                  className="capitalize md:text-[18px] text-[14px] mx-auto hover:text-main-light hover:text-[20px]"
                >
                  <a href={e?.href}>{e?.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>ghjkl;</div>
        </div>
      </div>
    </>
  );
};

export default Header;
