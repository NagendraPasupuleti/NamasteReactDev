import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestuarantDetails from "./components/RestuarantDetails";
import AboutChild from "./components/AboutChild";

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h5>Loading.................</h5>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "child",
            element: <AboutChild />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:id",
        element: <RestuarantDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h6>Loading.......</h6>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
