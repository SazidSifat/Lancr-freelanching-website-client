import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';


const Layout = () => {
    return (
        <>
            <header>
                <Navbar />

            </header>
            <main>
                <Outlet />

            </main>
        </>
    );
};

export default Layout;