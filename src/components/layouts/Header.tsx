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
      <div className="mt-5">
        <div className="flex items-center justify-center md:gap-10 gap-4">
          <nav className="">
            <ul className="md:flex hidden py-3 gap-4 px-10 bg-bg-header rounded-full ">
              {links?.map((e, i) => (
                <li
                  key={i}
                  className="capitalize text-main-title md:text-[18px] text-[14px] mx-auto hover:text-main-light hover:text-[20px]"
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
            className="flex md:hidden text-xl border-border-menu border justify-center items-center bg-bg-header rounded-full w-[42px] h-[42px]"
          >
            <SlMenu className="" />
          </button>
          <div className="bg-bg-header text-2xl cursor-pointer border border-border-menu rounded-full w-[42px] h-[42px] flex items-center justify-center">
            <MdNightlightRound />
          </div>
        </div>
        {showMenu && (
          <div className="fixed py-4 z-11 inset-0 max-w-[85%] max-h-[48%] backdrop-blur-[8px] mt-10 bg-bg-menu mx-auto rounded-2xl">
            <span className="flex justify-end mr-4">
              <button
                onClick={() => {
                  setShowMenu(false);
                }}
                className="bg-white text-lg hover:translate-x-2 text-bg-header rounded-sm p-1"
              >
                <IoMdClose />
              </button>
            </span>
            <ul className="">
              {links?.map((e, i) => (
                <li
                  key={i}
                  className="capitalize text-main-title text-[20px] text-start px-10 py-3 border-li border-b border-bg-border hover:text-main-light hover:text-[25px]"
                >
                  <a href={e?.href}>{e?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
