
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";

const Root = () => {
  return (
    <div className="w-full h-full flex-1 flex flex-col">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
