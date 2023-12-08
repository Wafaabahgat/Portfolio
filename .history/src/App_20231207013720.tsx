import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "@pages/root";
import ErrorPage from "./ErrorPage";
import { Home, Services, Blog, About_Us, Contact_Us } from "@pages/index";

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
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about-us",
        element: <About_Us />,
      },
      {
        path: "/contact-us",
        element: <Contact_Us />,
      },
    ],
  },
]);

export default router;
