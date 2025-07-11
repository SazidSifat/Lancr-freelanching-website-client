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
import Error from "../Pages/Error/Error";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Profile/Profile";
import ContactPage from "../Pages/Contact/Contact";
import Contact from "../Pages/Contact/Contact";
import AboutPage from "../Pages/AboutPage/AboutPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('https://freelance-task-marketplace-server-tau.vercel.app/feature-task'),
                hydrateFallbackElement: <Loading />
            },

            {
                path: '/browse-task',
                element: <BrowseTask />,
                loader: () => fetch("https://freelance-task-marketplace-server-tau.vercel.app/all-task"),
                hydrateFallbackElement: <Loading />
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
                loader: ({ params }) => fetch(`https://freelance-task-marketplace-server-tau.vercel.app/all-task/${params.id}`),
                element: <PrivateRoute><TaskDetails /></PrivateRoute>,
                hydrateFallbackElement: <Loading />


            },{
                path:'/contact',
                Component:Contact
            },
            {
                path:'/about',
                Component:AboutPage
            }



        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [

            {
                index: true,
                Component: Profile

            },

            {
                path: '/dashboard/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/dashboard/add-task',
                element: <PrivateRoute> <AddTask /> </PrivateRoute>
            },
            {
                path: '/dashboard/my-task',
                element: <PrivateRoute><Mytask /></PrivateRoute>

            },
            {
                path: '/dashboard/update-task/:id',
                element: <PrivateRoute><UpdateTask /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://freelance-task-marketplace-server-tau.vercel.app/all-task/${params.id}`),
                hydrateFallbackElement: <Loading />


            },

        ]
    },
    {
        path: '/*',
        Component: Error
    }

])