import React from 'react';
import { NavLink } from 'react-router';

import { HiUserCircle, HiPlusCircle, HiClipboardList } from 'react-icons/hi';

const DashboardAside = () => {
    return (
        <div className=''>
            <div className='hidden lg:block'>
                <div className='flex flex-col   gap-6 items-center bg-primary min-h-screen p-10 whitespace-nowrap   rounded-tr-4xl rounded-br-4xl'>

                    <NavLink to='/dashboard/profile'
                        className='flex items-center justify-center gap-3 text-primary-content px-10 py-3 text-lg font-bold hover:bg-secondary w-full  '>
                        <HiUserCircle size={24} />
                        Profile
                    </NavLink>
                    <NavLink to='/dashboard/add-task' className='flex items-center justify-center gap-3 text-primary-content px-10 py-3 text-lg font-bold hover:bg-secondary hover:text-secondary-content w-full '>  <HiPlusCircle size={24} />Add Task</NavLink>
                    <NavLink to='/dashboard/my-task' className='flex items-center justify-center gap-3 text-primary-content px-10 py-3 text-lg font-bold hover:bg-secondary hover:text-secondary-content w-full'><HiClipboardList size={24} /> My Task</NavLink>

                </div>
            </div>


            <div className='flex flex-col lg:hidden py-10  gap-6 items-center bg-primary min-h-screen whitespace-nowrap   rounded-tr-4xl rounded-br-4xl'>

                <NavLink
                    to="/dashboard/profile"
                    className='flex items-center gap-3 px-6 py-3 text-lg font-bold w-full bg-primary text-primary-content'>
                    <HiUserCircle size={30} />

                </NavLink>

                <NavLink
                    to="/dashboard/add-task"
                    className='flex items-center gap-3 px-6 py-3 text-lg font-bold w-fulltext-white bg-primary text-primary-content'>
                    <HiPlusCircle size={30} />

                </NavLink>

                <NavLink
                    to="/dashboard/my-task" className='flex items-center gap-3  px-6 py-3 text-lg font-bold w-full 
                    text-white bg-primarytext-primary-content'>
                    <HiClipboardList size={30} />

                </NavLink>

            </div>
        </div>
    );
};

export default DashboardAside;