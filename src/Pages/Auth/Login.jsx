
// import { motion } from "motion/react"
import * as motion from "motion/react-client"
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

    const { signinWithGoogle, setLoading, emailPassLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location);


    const [eye, setEye] = useState(false)


    const handleLogin = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())


        emailPassLogin(data.email, data.password).then(res=>{
            console.log( res );
        }).catch(err=>{
            console.log( err );
        })
    }

    const handleGoogleLogin = () => {
        signinWithGoogle()
            .then((res => {
                location.state ? navigate(location.state) : navigate('/')
                setLoading(false)
            }))
            .catch((err) => {
                console.log(err);
                console.log(err.code);
                setLoading(false)
                if (err.code === "auth/invalid-credential") {
                    toast.error("Invalid Credential.")
                }
            })
    }


    return (
        <div className="bg-base-200">
            <div className='  p-8  flex items-center justify-center container mx-auto '>

                <form onSubmit={handleLogin} className=' space-y-6 lg:w-[50%] bg-white  px-6 py-8 lg:px-20 lg:py-20 rounded'>

                    <div className='text-center'>  <p className='lg:text-xl'>Welcome Back !</p>
                        <p className='text-3xl lg:text-4xl font-bold'>Login Now</p>
                    </div>


                    <div className='space-y-6 border-b border-base-300 py-6 '>
                        <div className='grid grid-cols-1  gap-6'>
                            <div>
                                <label className='font-medium p-1'> Email</label>
                                <input name='email' type="email" placeholder='Enter email' className='border focus:outline-0 w-full border-base-300 py-3 bg-white px-4 rounded' />
                            </div>
                            <div>
                                <label className='font-medium p-1'> Password</label>
                                <div className='border w-full border-base-300 py-3 bg-white px-4 flex justify-between items-center ocus:outline-0'>
                                    <input name='password' type={eye ? "text" : "password"} placeholder='Enter password' className=' focus:outline-0' />
                                    <div onClick={() => setEye(!eye)} className='cursor-pointer'>
                                        {eye ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <motion.button whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.99 }} type="submit" className='bg-primary cursor-pointer text-white py-3 px-6 rounded w-full'>
                            Login
                        </motion.button>
                    </div>



                    <motion.button whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit" className='border border-base-300 font-bold  cursor-pointer  py-3 px-6 rounded w-full flex items-center justify-center gap-2  ' onClick={handleGoogleLogin}>
                        <FcGoogle size={25} />
                        <span>Login with Google</span>
                    </motion.button>


                    <p className='font-bold text-center'>Don't Have Account ? <Link to='/register' className='text-primary hover:underline'>Register</Link></p>

                </form>





            </div>
        </div>

    );
};

export default Login;