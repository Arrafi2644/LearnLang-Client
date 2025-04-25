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
    }, [reviews])

    // console.log(reviews);

    return (
        <>
            <Swiper
             slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                }}
            >

                <div>
                    {
                        reviews.map((review, index) => <SwiperSlide key={index} >
                            <div className='flex flex-col gap-1 justify-center items-center bg-secondary-light text-center border rounded-md p-6' >
                                <img className='w-28 h-28 border object-cover rounded-full' src={review.userImage} alt="" />
                                <h3 className='font-semibold'>{review.name}</h3>
                                <p className='text-sm'>Student: {review.learnedLanguage}</p>
                                <span className='flex items-center gap-1'><div aria-readonly className="rating rating-sm">
                                    <input  name="rating-2" className="mask mask-star-2 rating-5 bg-orange-400" aria-label="1 star" />
                                    <input  name="rating-2" className="mask mask-star-2 rating-5 bg-orange-400" aria-label="2 star" defaultChecked />
                                    <input  name="rating-2" className="mask mask-star-2 rating-5 bg-orange-400" aria-label="3 star" />
                                    <input  name="rating-2" className="mask mask-star-2 rating-5 bg-orange-400" aria-label="4 star" />
                                    <input  name="rating-2" className="mask mask-star-2 rating-5 bg-orange-400" aria-label="5 star" />
                                </div><p className='font-semibold text-base'>({review.rating})</p></span>
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