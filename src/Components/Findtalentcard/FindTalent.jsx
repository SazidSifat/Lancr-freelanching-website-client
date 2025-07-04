import React from 'react';
import image from '../../assets/images/h11-5.png'
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const FindTalent = () => {
    return (

        <Fade>
            <div className='p-2 '>
                <div className='container mx-auto   flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg bg-secondary/15'>

                    <div className='space-y-6 flex-1 p-6 md:p-16'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Find the talent needed to get your  business growing.</h1>
                        <p>Unlock your business’s full potential by connecting with skilled freelancers ready to bring your ideas to life. Whether it’s a one-time task or a long-term project, find the right talent to keep your business moving forward.</p>
                        <div>
                            <Link to='/browse-task' className='py-2 md:py-3 px-6 md:px-8 bg-primary rounded text-primary-content font-semibold'>
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 flex h-full items-end justify-center pt-3'>
                        <img src={image} alt="" />
                    </div>

                </div>
            </div>
        </Fade>

    );
};

export default FindTalent;