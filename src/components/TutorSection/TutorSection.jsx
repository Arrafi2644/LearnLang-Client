import React from 'react';
import useTutors from '../../hooks/useTutors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css'; // optional for custom styling


const TutorSection = () => {
    const [tutors, isLoading, refetch] = useTutors();

    return (
        <div className='mt-10 md:mt-14 mx-4'>
            <h2 className='mb-4 font-bold text-center text-3xl md:text-4xl text-primary-light'>
                Our Expert Tutors
            </h2>

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
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >

                {tutors.map((tutor, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col gap-1 justify-center items-center p-6 bg-white rounded-lg'>
                            <img
                                className='w-full h-60 border object-cover rounded-md'
                                src={tutor.image}
                                alt={tutor.name}
                            />
                            <h3 className='font-semibold text-center mt-2'>{tutor.name}</h3>
                            <h3 className='font-semibold text-center mt-2'>{tutor.language}</h3>
                            <button className="btn bg-[#EB5A3C] text-white min-h-0 h-auto w-full py-2.5 mt-1">View details</button>
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TutorSection;
