import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import MyBookedTutorCard from '../../components/MyBookedTutorCard/MyBookedTutorCard';

const MyBookedTutors = () => {
    const tutors = useLoaderData();
    // console.log(tutors);
    const bookedTutors = tutors.slice(0, 6)
    console.log(bookedTutors);

    return (
        <div className='my-10 md:my-14'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl text-text-light font-bold'>Find Your Tutor</h2></div>
                <div className="join">
                    <div>
                        <div className='flex justify-center'>
                            <input className="input input-bordered join-item" placeholder="Search" />
                            <button className="btn join-item bg-accent-light">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    bookedTutors.map(tutor => <MyBookedTutorCard key={tutor._id} tutor={tutor}></MyBookedTutorCard>)
                }
            </div>
        </div>
    );
};

export default MyBookedTutors;