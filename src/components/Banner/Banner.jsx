import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='max-h-96 h-96'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2000
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-slide1-bg w-full h-96 bg-center bg-cover bg-no-repeat'>
                    <div className='text-center h-96 flex items-center justify-center flex-col mx-4'>
                        <h2 className='text-primary-light font-bold text-4xl text-center'>Master New Languages with Expert Tutors</h2>
                        <p className=' text-center w-full md:w-4/5 lg:w-3/5 mx-auto font-medium text-text-light bg-[#ffffff4f] my-2'>Explore personalized learning sessions to achieve your language goals with ease and confidence</p>
                        
                        <Link to='/find-tutors' className='btn bg-accent-light  hover:bg-accent-dark text-text-light'>Start Learning Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-slide2-bg w-full h-96 bg-center bg-cover bg-no-repeat'>
                    <div className='text-center h-96 flex items-center justify-center flex-col mx-4'>
                        <h2 className='text-primary-light font-bold text-4xl text-center'>Find the Perfect Tutor for You</h2>
                        <p className=' text-center text-text-light w-full md:w-4/5 lg:w-3/5 mx-auto font-medium bg-[#ffffff4f] my-2'>Explore personalized learning sessions to achieve your language goals with ease and confidence</p>
                    
                        <Link to='/find-tutors' className='btn bg-accent-light  hover:bg-accent-dark text-text-light'>Find Your Tutor</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-slide3-bg h-96 w-full bg-center bg-cover bg-no-repeat'>
                    <div className='text-center h-96 flex items-center justify-center flex-col mx-4'>
                        <h2 className='text-primary-light font-bold text-4xl text-center '>Learn Anytime, Anywhere</h2>
                        <p className=' text-center text-text-light w-full md:w-4/5 lg:w-3/5 mx-auto font-medium bg-[#ffffff4f] my-2'>Explore personalized learning sessions to achieve your language goals with ease and confidence</p>
                        <Link to='/find-tutors' className='btn bg-accent-light  hover:bg-accent-dark text-text-light'>Book a Session</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;