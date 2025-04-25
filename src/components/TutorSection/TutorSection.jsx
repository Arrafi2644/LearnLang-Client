
import React, { useContext, useState } from 'react';
import useTutors from '../../hooks/useTutors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';


const TutorSection = () => {
    const {themeColor} = useContext(ThemeContext)
    const [category, setCategory] = useState("")
    const [sort, setSort] = useState("")
    const [search, setSearch] = useState("")
    const [tutors, isLoading, refetch] = useTutors(sort, search, category);
    console.log(tutors);

    return (
        <div className='mt-10 md:mt-14 mx-4'>
   <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: easeIn }}
            >
            <h2 className=' font-bold text-center text-3xl md:text-4xl text-primary-light'>
                Our Expert Tutors
            </h2>
            <p className={`text-center mb-6 ${themeColor === 'light' ? 'text-text-light' : 'text-text-dark'}`}>Meet Our Expert Tutors: Your Path to Language Mastery Begins Here</p>

            <div className='max-h-96 h-96 '>
                {!isLoading && tutors?.length > 0 && (
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        pagination={{ clickable: true }}
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
                                <div className='flex flex-col gap-1 justify-center items-center p-6 bg-white rounded-lg border'>
                                    <img
                                        className='w-full h-60 border object-cover rounded-md'
                                        src={tutor.tutorImage}
                                        alt={tutor.name}
                                    />
                                    <h3 className='font-semibold text-center mt-2'>{tutor.name}</h3>
                                    <h3 className='font-semibold text-center mt-2'>Language: {tutor.language}</h3>
                                    <Link to={`tutor/${tutor._id}`}><button className="btn bg-[#EB5A3C] text-white min-h-0 h-auto w-full block py-2.5 mt-1">View details</button></Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
            </motion.div>
        </div>
    );
};

export default TutorSection;
