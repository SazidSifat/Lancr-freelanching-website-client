import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import DashboardAside from '../Components/DashboardAside/DashboardAside';
import { Outlet } from 'react-router';
import MobileNav from '../Components/MobileNav/MobileNav';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading/Loading';

const Dashboard = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loading />
    }
    return (

        <div>
            <div className='flex '>

                <div className='lg:w-[20%]'>

                    <DashboardAside />

                </div>
                <div className='w-[80%]     bg-base-200' >
                    <div className=' sticky py-3 lg:pr-64  top-0 z-50 bg-base-300'>
                        <MobileNav />
                    </div>

                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;