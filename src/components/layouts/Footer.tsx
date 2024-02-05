import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <footer className="flex md:flex-row flex-col items-center md:gap-y-0 gap-y-2 mb-3 justify-between px-4">
        <ul className="capitalize flex gap-6">
          <li>
            <a href="#" className="footer">
              about
            </a>
          </li>
          <li>
            <a href="#" className="footer">
              projects
            </a>
          </li>
          <li>
            <a href="#" className="footer">
              speaking
            </a>
          </li>
          <li>
            <a href="#" className="footer">
              uses
            </a>
          </li>
        </ul>
        <p className="text-sub-title">
          @2023 Spencer Sharp. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
