import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Books_Section/Books";
import PageRead from "../Page_Read_Section/PageRead";
import NotFound from "../Error_Section/Error";
import Home from "../Home_Page/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/page-read",
        Component: PageRead,
      },
    ],
    errorElement: <NotFound />,
  },
]);
