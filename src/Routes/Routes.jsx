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
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AllUsers from "../pages/Dashboard/Users/AllUsers";
// import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

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
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'allUsers',
        element:<AllUsers></AllUsers>
      },
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