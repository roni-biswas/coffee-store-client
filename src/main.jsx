import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import Loading from "./components/Loading";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:8000/coffees"),
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "add-coffee",
        Component: AddCoffee,
      },
      {
        path: "coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:8000/coffees/${params.id}`),
        Component: CoffeeDetails,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:8000/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
