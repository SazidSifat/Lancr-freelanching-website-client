import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const feedback = [
    {
        name: "Emily Johnson",
        designation: "Startup Founder",
        photo: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740",
        rating: 5,
        feedback: "This platform made it incredibly easy to find a skilled designer for my brand launch. The process was smooth and secure!"
    },
    {
        name: "Ahmed Khan",
        designation: "Digital Marketer",
        photo: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
        rating: 4,
        feedback: "I posted a task for SEO optimization and received great proposals within hours. Highly recommended!"
    },
    {
        name: "Sophia Lee",
        designation: "Blogger",
        photo: "https://appstronauts.co/wp-content/uploads/2019/11/user-persona-1.jpg",
        rating: 5,
        feedback: "I hired a content writer through this site and the quality exceeded my expectations. Loved the communication features!"
    },
    {
        name: "Carlos Mendes",
        designation: "App Developer",
        photo: "https://media.istockphoto.com/id/1090878494/photo/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=AycQ2obu8sgJxWAJgYBbYR6jeRB9Bhs1JZBXzSgL6LE=",
        rating: 4,
        feedback: "Easy to use, great task visibility, and very helpful support team. Would love to see more filtering options in the future."
    },
    {
        name: "Maya Patel",
        designation: "Freelancer - UI/UX Designer",
        photo: "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?semt=ais_hybrid&w=740",
        rating: 5,
        feedback: "The bidding system is fair and transparent. I got consistent work from real clients and the feedback system builds trust."
    }
];


const WhatClient = () => {
    return (
        <div className='p-2'>
            <div className='container mx-auto '>
                <h1 className='text-4xl font-bold text-center py-10'>What Client Says,</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 'auto' },
                    }}
                >



                    {
                        feedback.map(feed => <SwiperSlide >
                            <div className='grid grid-cols-3 gap-6 p-6 md:p-20 bg-accent/20 rounded-lg items-center '>
                                <div className='flex items-center justify-center'>
                                    <img className='w-60 h-50  rounded-2xl' src={feed.photo} alt="" />
                                </div>
                                <div className='col-span-2 space-y-3 md:space-y-6 '>
                                    <div>
                                        <h1 className='text-xl md:text-2xl font-bold'>{feed.name}</h1>
                                        <p className='text-gray-400'>{feed.designation}</p>
                                    </div>
                                    <p className='text-sm'><i>"{feed.feedback}"</i></p>
                                </div>

                            </div>
                        </SwiperSlide>
                        )
                    }





                </Swiper>
            </div>
        </div>
    );

}



export default WhatClient;
