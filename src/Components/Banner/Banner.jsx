import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrSecure } from 'react-icons/gr';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';


const Banner = () => {
    return (


        <div className=' '>

            
        
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    className="mySwiper">

                    <SwiperSlide>
                        <Fade>
                            <div
                                style={{
                                    background: "linear-gradient(#00000000  0%,  #222222D4 110%), url('https://i.postimg.cc/3N5zvsJ5/rodeo-project-management-software-z-WQsz8ol8-Uo-unsplash.jpg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                                className='h-[90vh]  bg-base-200 flex flex-col items-start justify-center gap-5  lg:pl-10  p-4'
                            >
                                <div className='space-y-3 text-white w-full max-w-xl'>
                                    <h1 className='text-2xl sm:text-3xl lg:text-6xl font-bold'>
                                        With talented freelancers  do more work.
                                    </h1>
                                    <p className='text-sm md:text-base font-semibold'>
                                        Work with talented people at the most affordable price to get the <br /> most out of your time and cost
                                    </p>
                                </div>
                                <div>
                                    <Link to='/browse-task' className='py-2 md:py-3 px-6 md:px-8 bg-primary rounded text-primary-content font-semibold'>
                                        Find Task
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Fade>
                            <div style={{
                                background: "linear-gradient(180deg,#00000000  0%,  #222222D4 110%), url('https://i.ibb.co/pvKLgVp6/780722317a864e9d40bc5e9b99cb0827.jpg')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }} className='h-[90vh]  flex md:flex-row items-center justify-center md:pt-2'>
                                <div className='md:pl-6 p-4 space-y-6 flex-1 text-center text-primary-content'>
                                    <div className='space-y-3'>
                                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold'>
                                            Find the perfect <br /> freelance services for <br /> your business.
                                        </h1>
                                        <p className='text-sm md:text-base font-semibold'>
                                            Work with talented people at the most affordable price to get the most <br className='hidden sm:block' /> out of your time and cost
                                        </p>
                                    </div>
                                    <div>
                                        <Link to='/browse-task' className='py-2 md:py-3 px-6 md:px-8 bg-primary rounded text-primary-content font-semibold'>
                                            Find Task
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Fade>
                            <div
                                style={{
                                    background: "linear-gradient(180deg,#00000000  0%,  #222222D4 110%), url('https://i.postimg.cc/R00mCxqg/good-faces-DSj40n6be-Gk-unsplash.jpg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                                className='h-[90vh]  lg:bg-right flex flex-col items-start justify-center gap-5 p-4   md:pl-10 text-white'
                            >
                                <div className='space-y-3 w-full text-left md:max-w-3xl'>
                                    <h1 className='text-2xl sm:text-3xl lg:text-6xl font-bold'>
                                        Hire the best freelancers for any job, online.
                                    </h1>
                                    <p className='text-sm md:text-base font-semibold'>
                                        Work with talented people at the most affordable price to get the <br /> most out of your time and cost
                                    </p>
                                </div>
                                <div>
                                    <Link to='/browse-task' className='py-2 md:py-3 px-6 md:px-8 bg-primary rounded text-primary-content font-semibold'>
                                        Find Task
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </SwiperSlide>
                </Swiper>
           
        </div >
    );
};

export default Banner;
