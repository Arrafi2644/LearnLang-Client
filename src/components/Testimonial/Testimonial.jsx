import React, { useContext } from 'react';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import { ThemeContext } from '../../context/ThemeContext';

const Testimonial = () => {
    const {themColor} = useContext(ThemeContext)
    return (
        <div className='my-10 md:my-14 mx-4'>
            <h2 className='text-3xl md:text-4xl text-primary-light font-bold text-center'>Testimonial</h2>
            <p className={`text-center mb-6 ${themColor === 'light' ? 'text-text-light' : 'text-text-dark'}`}>Discover what our users say about their learning experiences with expert tutors on learnLang</p>

            {/* Testimonial slider  */}
            <TestimonialSlider></TestimonialSlider>
        </div>
    );
};

export default Testimonial;