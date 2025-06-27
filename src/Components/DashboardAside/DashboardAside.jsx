import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/images/Logo maker project.png'

import { HiUserCircle, HiPlusCircle, HiClipboardList } from 'react-icons/hi';
import { FaTachometerAlt } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { AuthContext } from '../../Context/AuthContext';

const DashboardAside = () => {
    const { signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser().then(() => {

        })

    }




    return (
        <div className=''>
            <div className='hidden lg:block'>
                <div className='flex flex-col justify-between bg-primary min-h-screen p-10 whitespace-nowrap  '>
                    <div className='flex flex-col  items-start  gap-6   '>
                        <Link to='/' className='flex px-10 py-2 items-center border-b border-base-300    w-full '>
                            <img src={logo} alt="" className='w-9 md:w-12 ' />
                            <h1 className='text-2xl md:text-3xl font-bold text-primary-content'>Lancr<span className='text-secondary'>.</span></h1>
                        </Link>
                        <NavLink to='/dashboard/profile'
                            className='flex items-center   gap-3 text-primary-content px-10 py-2 text-lg font-bold hover:bg-secondary w-full  '>
                            <MdDashboard size={24} />
                            Dashboard
                        </NavLink>
                        <NavLink to='/dashboard/add-task' className='flex items-center  gap-3 text-primary-content px-10 py-2 text-lg font-bold hover:bg-secondary hover:text-secondary-content w-full '>  <HiPlusCircle size={24} />Add Task</NavLink>
                        <NavLink to='/dashboard/my-task' className='flex items-center  gap-3 text-primary-content px-10 py-2 text-lg font-bold hover:bg-secondary hover:text-secondary-content w-full'><HiClipboardList size={24} /> My Task</NavLink>

                    </div>
                    <div className='py-6  border-t border-base-300 '>
                        <button onClick={handleSignOut} className='py-3 rounded cursor-pointer  text-xl text-red-400 w-full border border-red-400  hover:bg-red-400] hover:text-red-400 '>
                            Logout
                        </button>

                    </div>
                </div>

            </div>


            <div className='flex flex-col lg:hidden py-10 sticky left-0 top-0 z-10  gap-6 items-center bg-primary min-h-screen whitespace-nowrap   '>
                <Link to='/' className='flex items-center justify-center  py-2 border-b border-base-300 w-full '>
                    <img src={logo} alt="" className='w-9 md:w-12 ' />

                </Link>

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