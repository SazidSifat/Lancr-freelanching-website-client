import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import AddTask from "../Pages/AddTask/AddTask";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import BrowseTask from "../Pages/BrowseTask/BrowseTask";
import Mytask from "../Pages/MyTask/Mytask";
import TaskDetails from "../Components/TaskDetails/TaskDetails";
import Loading from "../Components/Loading/Loading";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('http://localhost:3000/feature-task')
            },
            {
                path: '/add-task',
                element: <PrivateRoute> <AddTask /> </PrivateRoute>
            },
            {
                path: '/browse-task',
                element: <BrowseTask />,
                loader: () => fetch("http://localhost:3000/all-task"),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/my-task',
                element: <PrivateRoute><Mytask /></PrivateRoute>

            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Registration
            },
            {
                path: '/task-details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/all-task/${params.id}`),
                element: <PrivateRoute><TaskDetails /></PrivateRoute>

            }, {
                path: '/update-task/:id',
                element: <PrivateRoute><UpdateTask /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/all-task/${params.id}`)

            }


        ]

    }

])