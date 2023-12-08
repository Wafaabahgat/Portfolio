import { FC } from "react";
import { MdNightlightRound } from "react-icons/md";

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
        <div className="flex items-center justify-center gap-20">
          <nav className="">
            <ul className="md:flex hidden py-3 gap-4 px-10 bg-bg-header rounded-full ">
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

          <div className="bg-bg-header rounded-full w-[30px] h-[30px] flex items-center justify-center">
            <MdNightlightRound />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
