import React from 'react';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';

const Testimonial = () => {
    return (
        <div className='mt-10 md:mt-14'>
            <h2 className='text-3xl font-bold text-center'>Testimonial</h2>
            <p className='text-center mb-6'>Discover what our users say about their learning experiences with expert tutors on learnLang</p>

            {/* Testimonial slider  */}
            <TestimonialSlider></TestimonialSlider>
        </div>
    );
};

export default Testimonial;