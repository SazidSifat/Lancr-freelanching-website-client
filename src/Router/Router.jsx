import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import AddTask from "../Pages/AddTask/AddTask";

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
                path: '//browse-task',
                Component: AddTask
            }


        ]

    }

])