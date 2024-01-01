import { FC } from "react";
import { FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";
import Lottie from "lottie-React";
import herobg from "@assets/animation/heroimg";
interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <>
      <div className="ml-20">
        <div className="mb-14 ">
          <div className="flex items-center gap-5 mb-3">
            <FaEnvelope className="text-[1.8rem] text-sub-title" />
            <h2 className="font-semibold capitalize text-main-title text-[2.1rem]">
              contact us
            </h2>
          </div>
          <p className=" text-sm">
            Contact us for more information and Get notified when l publish
            something new.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <form className="">
            <div className="flex items-center gap-5 ">
              <label className="capitalize text-sub-title" htmlFor="email">
                email address :
              </label>
              <input
                placeholder="Email Address"
                type="email"
                className=" bg-bg-input p-2 rounded-md border border-bg-border hover:border-main-light"
              />
            </div>
            <div className="flex items-center gap-4 my-12">
              <label className="capitalize text-sub-title" htmlFor="message">
                your message :
              </label>
              <textarea
                name=""
                id="message"
                className="bg-bg-input border hover:border-main-light border-bg-border p-10 rounded-md"
              ></textarea>
            </div>
            <Button name="submit" className="px-7" />
          </form>
          <div className="">
            <Lottie
              className=""
              style={{ height: 355 }}
              animationData={herobg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
