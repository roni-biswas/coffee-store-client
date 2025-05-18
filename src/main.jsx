import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import Loading from "./components/Loading";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import AuthLayout from "./layouts/AuthLayout";
import SingIn from "./components/SingIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./provider/AuthProvider";
import Users from "./components/Users";
import PrivetRoute from "./provider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://coffee-store-server-ivory-one.vercel.app/coffees"),
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "add-coffee",
        element: (
          <PrivetRoute>
            <AddCoffee />
          </PrivetRoute>
        ),
      },
      {
        path: "coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ivory-one.vercel.app/coffees/${params.id}`
          ),
        Component: CoffeeDetails,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ivory-one.vercel.app/coffees/${params.id}`
          ),
        Component: UpdateCoffee,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signin",
        Component: SingIn,
      },
      {
        path: "/auth/signup",
        Component: SignUp,
      },
      {
        path: "/auth/users",
        loader: () =>
          fetch("https://coffee-store-server-ivory-one.vercel.app/users"),
        Component: Users,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
