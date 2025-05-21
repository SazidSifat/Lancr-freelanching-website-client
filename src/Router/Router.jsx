import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import AddTask from "../Pages/AddTask/AddTask";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/add-task',
                Component: AddTask
            },
            {
                path: '/browse-task',
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Registration
            }


        ]

    }

])