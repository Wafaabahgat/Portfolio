import { FC } from "react";

interface HeaderProps {}

const links = [
  //   {
  //     link: "/",
  //     name: "about",
  //   },
  //   {
  //     link: "/services",
  //     name: "services",
  //   },
  //   {
  //     link: "/blog",
  //     name: "projects",
  //   },
  //   {
  //     link: "/about-us",
  //     name: "speaking",
  //   },
  //   {
  //     link: "/about-us",
  //     name: "contact",
  //   },
];

const Header: FC<HeaderProps> = () => {
  // const { pathname } = useLocation();

  return (
    <>
      <div>
        <div>
          {links?.map((e,i)=>())}
        </div>
      </div>
    </>
  );
};

export default Header;
