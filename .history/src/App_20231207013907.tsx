import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "@pages/root";
import ErrorPage from "./ErrorPage";
import { Home } from "@pages/index";

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
