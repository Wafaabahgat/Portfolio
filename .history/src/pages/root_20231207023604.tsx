import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Root = () => {
  return (
    <div className=" container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
