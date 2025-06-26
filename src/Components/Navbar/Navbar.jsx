import React, { use, useContext, useState } from 'react';
import logo from '../../assets/images/Logo maker project.png'
import { Link, Links, NavLink } from 'react-router';
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../../Context/AuthContext';
import Theme from '../Theme/Theme';


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const { user, signOutUser } = useContext(AuthContext)


    const handleSignOut = () => {
        signOutUser().then(() => {

        })

    }

    return (
        <>
            <nav className='container mx-auto py-4 flex items-center justify-between px-3    lg:px-0 '>
                <Link to='/' className='flex items-center '>
                    <img src={logo} alt="" className='w-9 md:w-12 ' />
                    <h1 className='text-2xl md:text-3xl font-bold'>Lancr<span className='text-primary'>.</span></h1>
                </Link>
                <div className='flex  items-center gap-5 lg:gap-10'>
                    <ul className='space-x-3 font-bold hidden md:block'>
                        <NavLink className='p-1' to='/'>Home</NavLink>
                        {/* <NavLink className='p-1' to='/add-task'>Add Task</NavLink> */}
                        <NavLink className='p-1' to='/browse-task'>Browse Task</NavLink>
                        <NavLink className='p-1' to='/contact'>Contact</NavLink>
                        <NavLink className='p-1' to='/about'>About Us</NavLink>
                        {/* <NavLink className='p-1' to='/my-task'>My Task</NavLink> */}
                    </ul>

                    <div className='flex items-center justify-center'>
                        <Theme />

                        {
                            user ? <div className='  relative inline-block group '>
                                <img src={user.photoURL} referrerPolicy='no-referrer' alt="Image" className='w-11 rounded cursor-pointer' />
                                <div className="absolute  -translate-x-3/4 top-12 z-10 bg-base-100 text-white px-6 py-3 rounded whitespace-nowrap cursor-pointer select-none opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all flex   flex-col gap-2 ">
                                    <h1 className='text-base-content font-bold'>{user?.displayName}</h1>
                                    <Link to='/dashboard' className='text-base-content font-bold hover:text-secondary'>Dashboard</Link>
                                    <button onClick={handleSignOut} to='/login' className='btn text-red-400 w-full border border-red-400  hover:bg-red-400] hover:text-red-400 '>
                                        Logout
                                    </button>

                                </div>

                            </div> : <div className='space-x-3 flex items-center '>
                                <Link to='/login' className='btn text-primary border border-primary  hover:bg-[#15534c] hover:text-primary-content  '>
                                    Login
                                </Link>
                                <Link to='/register' >
                                    <button className='btn bg-primary text-primary-content border-none hover:bg-[#15534c] hidden lg:block'>
                                        Register
                                    </button>
                                </Link>

                            </div>
                        }
                        <div onClick={() => setToggle(!toggle)} className='md:hidden'>
                            <CgMenuRightAlt size={36} />
                        </div>
                    </div>
                </div>

                <div className={`absolute sm:hidden  z-50 bg-base-100 h-[1500px] w-[65%] top-0 transition-all duration-500 ${toggle ? 'left-0' : '-left-[500px]'}`} >


                    <div className='place-items-end p-6 border-base-300 border-x-0 border-t-0 w-full  border-b-1 '>
                        <div className=' hover:bg-accent   p-1 rounded-sm bg-base-200  cursor-pointer' onClick={() => setToggle(!toggle)} >
                            <RxCross2 size={28} />
                        </div>
                    </div>

                    <div className=' text-base-content'>
                        <ul className='flex flex-col text-center items-center gap-2 '>
                            <NavLink onClick={() => setToggle(!toggle)} to="/" className='hover:text-primary font-semibold p-2  border-base-300 border-x-0 w-full border-t-0  border-b-1'>Home</NavLink>

                            <NavLink onClick={() => setToggle(!toggle)} to='/add-task' className='hover:text-primary font-semibold p-2  border-base-300 border-x-0 border-t-0 w-full  border-b-1'>Add Task</NavLink>

                            <NavLink onClick={() => setToggle(!toggle)} to='/browse-task' className='hover:text-primary font-semibold p-2  border-base-300 border-x-0 w-full border-t-0  border-b-1'>Browse Task</NavLink>

                            <NavLink onClick={() => setToggle(!toggle)} to='/my-task' className='hover:text-primary font-semibold p-2  border-base-300 border-x-0 w-full border-t-0  border-b-1'>My Task</NavLink>
                        </ul>

                    </div>





                </div>
            </nav>



        </>
    );
};

export default Navbar;