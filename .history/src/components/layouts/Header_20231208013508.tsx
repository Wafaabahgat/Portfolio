import { FC, useState } from "react";
import { MdNightlightRound } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

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
  const [showMenu, setShowMenu] = useState(false);

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
          <button
            onClick={() => {
              setShowMenu(true);
            }}
            className="flex md:hidden justify-center items-center bg-bg-header rounded-full w-[40px] h-[40px]"
          >
            <SlMenu className="" />
          </button>
          <div className="bg-bg-header rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <MdNightlightRound />
          </div>
        </div>
        {showMenu && (
          <div>
            <nav className="mt-4">
              <ul className="fixed py-3 px gap-4 bg-bg-header rounded-2xl">
                <li
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="bg-white text-bg-header rounded-full w-[20px] h-[20px] flex items-center justify-center"
                >
                  <IoMdClose />
                </li>
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
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
