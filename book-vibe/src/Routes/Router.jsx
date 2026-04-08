import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import home from "../Home_Page/home";
import Books from "../Books_Section/Books";
import PageRead from "../Page_Read_Section/PageRead";
import NotFound from "../Error_Section/Error";

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
      {
        path: "/page-read",
        Component: PageRead,
      },
    ],
    errorElement: <NotFound />
  },
]);
