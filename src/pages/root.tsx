import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const [showScrollBtn, setshowScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  });
  return (
    <div id="up" className="container">
      <Header />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />

      <a
        href="#up"
        style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
      >
        <button className="scrollTop">
          <IoIosArrowUp />
        </button>
      </a>
      {/* {showScrollBtn && (
        <a href="#up">
          <button className="scrollTop">
            <IoIosArrowUp />
          </button>
        </a>
      )} */}
    </div>
  );
};

export default Root;
