import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import AppList from "../pages/AppList/AppList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: ()=> fetch('appsData.json'),
            path: '/',
            Component: Home
        },
        {
          loader: ()=> fetch('appsData.json'),
          path: '/appDetails/:id',
          Component: AppsDetails
        },
        {
          loader: ()=> fetch('appsData.json'),
          path: '/appList',
          Component: AppList
        },
        {
          path: '/installation',
          Component: Installation
        }
    ]
  },
]);