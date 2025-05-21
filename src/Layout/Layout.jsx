import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const Layout = () => {
    return (
        <>
            <header className='border-b border-base-300 '>
                <Navbar />

            </header>
            <main>
                <Outlet />

            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;