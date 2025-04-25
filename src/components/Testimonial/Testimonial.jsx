import React, { useContext } from 'react';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import { ThemeContext } from '../../context/ThemeContext';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"


const Testimonial = () => {
    const {themeColor} = useContext(ThemeContext)
    return (
        <div className='my-10 md:my-14 mx-4'>
               <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: easeIn }}
            >
            <h2 className='text-3xl md:text-4xl text-primary-light font-bold text-center'>Testimonial</h2>
            <p className={`text-center mb-6 ${themeColor === 'light' ? 'text-text-light' : 'text-text-dark'}`}>Discover what our users say about their learning experiences with expert tutors on learnLang</p>

            {/* Testimonial slider  */}
            <TestimonialSlider></TestimonialSlider>
            </motion.div>
        </div>
    );
};

export default Testimonial;