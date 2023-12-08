
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Root = () => {
  return (
    <div className="w-full h-full flex-1 flex flex-col">
      <Header />
      <Outlet />
      <Footerer />
    </div>
  );
};

export default Root;
