import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';
const TestimonialSlider = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('/testimonials.json')
            .then(res => setReviews(res.data))
    }, [])

    // console.log(reviews);

    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop = {true}
                autoplay = {{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                <div>
                    {
                        reviews.map((review, index) => <SwiperSlide key={index} >
                           <div className='flex flex-col gap-1 justify-center items-center' >
                           <img className='w-28 h-28 border object-cover rounded-full' src={review.userImage} alt="" />
                            <h3 className='font-semibold'>{review.name}</h3>
                            <p className='text-sm'>Student: {review.learnedLanguage}</p>
                            <p>" {review.feedback} "</p>
                           </div>
                        </SwiperSlide>)
                    }
                </div>




            </Swiper>
        </>
    );
};

export default TestimonialSlider;