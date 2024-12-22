import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import LanguageCategorySection from '../../components/LanguageCategorySection/LanguageCategorySection';

const Home = () => {
    return (
        <div>
            {/* Banner  */}
            <Banner></Banner>
            {/* States  */}
            <States></States>
            {/* Language Category  */}
            <LanguageCategorySection></LanguageCategorySection>
        </div>
    );
};

export default Home;