import React from 'react';
import errimgic from '../../assets/images/icon-error.png'
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';



const Error = () => {
    return (
        <div className='container mx-auto p-20 flex flex-col gap-8 items-center justify-center min-h-screen' >


            <div>
                <img src={errimgic} alt="" />
            </div>
            <div>
                <p className='text-2xl font-bold'><i><Typewriter
                    options={{
                        strings: ["'404 Error '", "'Page Not Found !'"],
                        autoStart: true,
                        loop: true,
                    }}
                /></i></p>
            </div>

            <motion.div>

                <Link to='/' className='px-8 py-3  rounded bg-primary text-primary-content'>Back To Home </Link>

            </motion.div>

        </div>
    );
};

export default Error;