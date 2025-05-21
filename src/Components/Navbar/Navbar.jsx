import React from 'react';
import logo from '../../assets/images/Logo maker project.png'
import { Link, NavLink } from 'react-router';
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto py-4 flex items-center justify-between px-3    lg:px-0'>
                <Link to='/'  className='flex items-center '>
                    <img src={logo} alt="" className='w-9 md:w-12 ' />
                    <h1 className='text-2xl md:text-3xl font-bold'>Lancr<span className='text-primary'>.</span></h1>
                </Link>
                <div className='flex  items-center gap-5 lg:gap-10'>
                    <ul className='space-x-3 font-bold hidden md:block'>
                        <NavLink className='p-1' to='/'>Home</NavLink>
                        <NavLink className='p-1' to='/add-task'>Add Task</NavLink>
                        <NavLink className='p-1' to='/browse-task'>Browse Task</NavLink>
                        <NavLink className='p-1' to='/my-task'>My Task</NavLink>
                    </ul>
                    <div className='space-x-3 flex items-center '>
                        <button className='btn text-primary border border-primary  hover:bg-[#15534c] hover:text-primary-content  '>
                            Login
                        </button>
                        <button className='btn bg-primary text-primary-content border-none hover:bg-[#15534c] hidden lg:block'>
                            Registration
                        </button>
                        <div className='md:hidden'>
                            <CgMenuRightAlt size={36} />
                        </div>
                    </div>
                </div>
            </nav>



        </>
    );
};

export default Navbar;