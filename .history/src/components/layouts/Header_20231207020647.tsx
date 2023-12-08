import { FC } from "react";
import Container from "../ui/Container";
import { Logo } from "@assets/Logo";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "@/utils";

interface HeaderProps {}

const links = [
  {
    link: "/",
    name: "home",
  },
  {
    link: "/services",
    name: "services",
  },
  {
    link: "/blog",
    name: "blog",
  },
  {
    link: "/about-us",
    name: "about us",
  },
];

const Header: FC<HeaderProps> = () => {
  // const { pathname } = useLocation();

  return (
    <div className="max-h-[164px]">
      <Container className="flex items-center lg:h-[164px] md:h-[140px] sm:h-[120px] h-[100px] justify-between gap-14">
        <div>
          <Logo className="min-w-[150px] w-full sm:max-w-[332px] max-h-[60px] max-w-[220px]" />
        </div>
        <div className="flex items-center gap-6">
          <nav className="lg:flex hidden xl:py-3 py-2 xl:px-8 px-6 items-center xl:gap-[40px] gap-8 border border-main-light rounded-full">
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
          <Link to="/contact-us">
            <Button text="Get Started" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
