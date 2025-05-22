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
            <header className='border-b border-base-300 '>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;