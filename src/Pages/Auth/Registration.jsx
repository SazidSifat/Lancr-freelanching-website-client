import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as motion from "motion/react-client"
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const Registration = () => {

    const { signinWithGoogle, setLoading, emailPassRegister, updateUserProfile } = useContext(AuthContext);
    const [eye, setEye] = useState(false)
    const [err, setErr] = useState(null)


    const handleRegister = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        const email = data.email
        const pass = data.password


        if (pass.length < 6) {
            toast.error("Password Must 6 Charater Long")
        } else if (!/(?=.*[a-z])/.test(pass)) {
            toast.error("Password Must Have 1 Lowercase")
        } else if (!/(?=.*[A-Z])/.test(pass)) {
            toast.error("Password Must Have 1 Uppercase")
        } else {
            emailPassRegister(email, pass).then(res => {
                updateUserProfile({
                    displayName: data.name, photoURL: data.photo
                })

            }).catch(err => {
                if (err.code === "auth/email-already-in-use") {
                    toast.error("User Already Exist ! Please Login.")
                }
            })

        }

    }

    const handleGoogleLogin = () => {
        signinWithGoogle()
            .then((res => {
                console.log(res);
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
        <div className='bg-base-200'>
            <div className=' p-8 flex items-center justify-center container mx-auto '>

                <form onSubmit={handleRegister} className=' space-y-6 lg:w-[50%] bg-white px-6 lg:px-20 py-8 lg:py-10 rounded'>

                    <div className='text-center'>  <p className='text-xl'>Welcome,</p>
                        <p className='text-3xl font-bold'>Create Your Account Now</p></div>


                    <div className='space-y-6 border-b border-base-300 py-6'>
                        <div className='grid grid-cols-1  gap-6'>
                            <div>
                                <label className='font-medium p-1'> Name</label>
                                <input name='name' type="text" placeholder='Enter email' className='border focus:outline-0 w-full border-base-300 py-3 bg-white px-4 rounded' />
                            </div>
                            <div>
                                <label className='font-medium p-1'> Email</label>
                                <input name='email' type="email" placeholder='Enter email' className='border focus:outline-0 w-full border-base-300 py-3 bg-white px-4 rounded' />
                            </div>
                            <div>
                                <label className='font-medium p-1'> Photo</label>
                                <input name='photo' type="text" placeholder='Photo URL' className='border focus:outline-0 w-full border-base-300 py-3 bg-white px-4 rounded' />
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
                            Register
                        </motion.button>
                    </div>



                    <motion.button whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={handleGoogleLogin}
                        className='border border-base-300 font-bold  cursor-pointer  py-3 px-6 rounded w-full flex items-center justify-center gap-2  '>
                        <FcGoogle size={25} />
                        <span>Signup with Google</span>
                    </motion.button>


                    <p className='font-bold text-center'>Already Have Account ? <Link to='/login' className='text-primary hover:underline'>Login</Link></p>

                </form>




            </div>
        </div>
    );
};

export default Registration;