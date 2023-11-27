import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Register from "../pages/Register/Register";
import LogIn from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/Dashboard/Users/UserProfile";
import UserParcel from "../pages/Dashboard/Users/UserParcel";
import BookParcel from "../pages/Dashboard/Users/BookParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      // {
      //   path: "/dashboard",
      //   element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>
      // },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      }

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'profile',
        element:<UserProfile></UserProfile> 
      },
      {
        path: 'userParcel',
        element:<UserParcel></UserParcel> 
      },
      {
        path: 'bookParcel',
        element:<BookParcel></BookParcel> 
      },
    ]
  }
]);