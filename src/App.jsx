import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";

const FoodApp = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            //you should add only profile to get /profile added to /about.
            // If you add here /profile then your route will look like
            // http://localhost:1234/profile
            // so always it will loook like parantpath/{path}
            // Don't forget to add Outlet component where Profile will get replaced
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestrauntMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
