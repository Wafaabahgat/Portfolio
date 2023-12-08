import { FC } from "react";
import StayInformed from "../globals/StayInformed";
import Logo from "@assets/home/Logo.svg";
import {
  FacebookIcon,
  GithupIcon,
  InstgramIcon,
  TwitterIcon,
} from "@/assets/home/SVGSocial";
import Container from "../ui/Container";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <div className="bg-[#F6F8FF] mt-20">
        <StayInformed />
        <div className="mt-[80px] text-sm text-[#52525B] footer__border">
          <Container className="pb-20 pt-16 px-2 grid lg:grid-cols-6 grid-cols-1 items-stretch gap-14">
            {/*  */}
            <div className="flex flex-col justify-between lg:col-span-2 max-w-[260px]">
              <img className="block max-w-[260px]" src={Logo} alt="" />
              <p className="my-10">
                Lorem ipsum dolor sit amet consectetur.
                <br className="lg:hidden" /> Egestas in consequat nisl mattis
                elementum neque.
              </p>
              <div className="flex items-center gap-4">
                <TwitterIcon className="hover:opacity-90 active:scale-125 block cursor-pointer" />
                <FacebookIcon className="hover:opacity-90 active:scale-125 block cursor-pointer" />
                <InstgramIcon className="hover:opacity-90 active:scale-125 block cursor-pointer" />
                <GithupIcon className="hover:opacity-90 active:scale-125 block cursor-pointer" />
              </div>
            </div>
            {/*  */}
            <div className="lg:col-span-4 grid sm:grid-cols-3 grid-cols-2 gap-4 relative">
              <ul className="flex flex-col justify-between gap-6 h-full">
                <li className="text-main-light uppercase font-semibold">
                  Company
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  About
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Features
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Works
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Career
                </li>
              </ul>
              <ul className="flex flex-col justify-between gap-6 h-full">
                <li className="text-main-light uppercase font-semibold">
                  Help
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Customer Support
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Delivery Details
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
              <ul className="flex flex-col justify-between gap-6 h-full">
                <li className="text-main-light uppercase font-semibold">
                  Resources
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Free eBooks
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Development
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  How to - Blog
                </li>
                <li className="hover:ml-2 hover:underline duration-500 transition-all hover:text-main cursor-pointer">
                  Youtube Playlist
                </li>
              </ul>
            </div>
          </Container>
          <p className="border-t border-slate-200 text-center py-9">
            © Copyright 2022, All Rights Reserved by Securecrowd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
