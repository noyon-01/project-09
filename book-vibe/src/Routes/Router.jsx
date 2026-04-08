import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import home from "../Home_Page/home";
import Books from "../Books_Section/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: home,
      },
      {
        path: "/books",
        Component: Books,
      },
    ],
  },
]);
