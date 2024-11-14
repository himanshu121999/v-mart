import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import ProductLsitingPage from "../screens/ProductLsitingPage";

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "home",
          element: <ProductLsitingPage />,
        },
        {
          path: "about",
          element: <> This is About Page </>,
        },
        {
          path: "contact-us",
          element: <> This is Contact Page </>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default PageRoutes;
