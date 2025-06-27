import React, { useContext } from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading/Loading';
import { ToastContainer } from 'react-toastify';


const Layout = () => {

    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <ToastContainer />
            <header className='sticky top-0 z-50'>
                <Navbar />
            </header>
            <main className=''>
                <Outlet />
            </main >
            <Footer />

        </>
    );
};

export default Layout;