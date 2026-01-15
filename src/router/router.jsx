import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Discover from "../pages/discover/Discover";
import Save from "../pages/save/Save";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "discover",
        element: <Discover />
      },
      {
        path: "save",
        element: <Save />
      }
    ]
  }
]);