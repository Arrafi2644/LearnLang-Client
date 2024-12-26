import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import LanguageCategorySection from '../../components/LanguageCategorySection/LanguageCategorySection';
import Testimonial from '../../components/Testimonial/Testimonial';
import LatestBlog from '../../components/LatestBlog/LatestBlog';

const Home = () => {
    return (
        <div>
            {/* Banner  */}
            <Banner></Banner>
            {/* States  */}
            <States></States>
            {/* Language Category  */}
            <LanguageCategorySection></LanguageCategorySection>
            {/* Testimonial */}
            <Testimonial></Testimonial>
            {/* blog */}
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;