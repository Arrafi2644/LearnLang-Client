import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <>
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
                <SwiperSlide className='bg-slide1-bg w-full bg-center bg-cover bg-no-repeat'>
                    <div className='text-center h-[500px] flex items-center justify-center flex-col'>
                        <h2 className='text-primary-light font-bold text-4xl text-center'>Master New Languages with Expert Tutors</h2>
                        <p className=' text-center w-full md:w-4/5 lg:w-3/5 mx-auto font-medium bg-[#ffffff4f] my-2'>Explore personalized learning sessions to achieve your language goals with ease and confidence</p>
                        <button className='btn bg-accent-light'>Start Learning Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-slide2-bg w-full bg-center bg-cover bg-no-repeat min-h-[500px]'>
                    <div className='text-center  h-[500px] flex items-center justify-center flex-col'>
                        <h2 className='text-primary-light font-bold text-4xl text-center'>Find the Perfect Tutor for You</h2>
                        <p className=' text-center text-text-light w-full md:w-4/5 lg:w-3/5 mx-auto font-medium bg-[#ffffff4f] my-2'>Explore personalized learning sessions to achieve your language goals with ease and confidence</p>
                        <button className='btn bg-accent-light text-text-light'>Find Your Tutor</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-slide3-bg w-full bg-center bg-cover bg-no-repeat min-h-[500px]'>
                    <div className='text-center  h-[500px] flex items-center justify-center flex-col'>
                        <h2 className='text-primary-light font-bold text-4xl text-center '>Learn Anytime, Anywhere</h2>
                        <p className=' text-center text-text-light w-full md:w-4/5 lg:w-3/5 mx-auto font-medium bg-[#ffffff4f] my-2'>Explore personalized learning sessions to achieve your language goals with ease and confidence</p>
                        <button className='btn bg-accent-light text-text-light'>Book a Session</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;