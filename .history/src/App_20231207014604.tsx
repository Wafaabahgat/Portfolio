import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "";

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
