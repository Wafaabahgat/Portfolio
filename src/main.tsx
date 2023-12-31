import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
