import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import DashboardAside from '../Components/DashboardAside/DashboardAside';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (

        <div>
            <Navbar />
            <div className='flex '>

                <div className='lg:w-[20%]'>

                    <DashboardAside/>

                </div>
                <div className='w-[80%]' ><Outlet/></div>

            </div>
        </div>
    );
};

export default Dashboard;