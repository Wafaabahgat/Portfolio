import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "@pages/root";
// import Root from "./pages/root";

import { Home } from "./pages/index";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
