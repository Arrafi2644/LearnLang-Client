import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import LanguageCategorySection from '../../components/LanguageCategorySection/LanguageCategorySection';
import Testimonial from '../../components/Testimonial/Testimonial';
import LatestBlog from '../../components/LatestBlog/LatestBlog';
import TutorSection from '../../components/TutorSection/TutorSection';

const Home = () => {
    return (
        <div>
            {/* Banner  */}
            <div className='container mx-auto min-h-screen'>
            <Banner></Banner>
            {/* States  */}
            <States></States>
            {/* Language Category  */}
            <LanguageCategorySection></LanguageCategorySection>
            {/* Tutors section  */}
            <TutorSection></TutorSection>
            {/* Testimonial */}
            <Testimonial></Testimonial>
            {/* blog */}
            <LatestBlog></LatestBlog>
            </div>
        </div>
    );
};

export default Home;