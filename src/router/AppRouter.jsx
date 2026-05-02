import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import About from "../pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Navigate to="home" replace/> },
      { path: "home", element: <Home/> },
      { path: "about", element: <About/> },
      { path: "details", element: <Details/> },
    ],
  },
], { basename: "/recipe-app" });

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
