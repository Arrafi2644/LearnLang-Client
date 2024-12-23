import React from 'react';

const TutorCard = ({tutor}) => {
    console.log(tutor);
    const {_id, name, image, language, price, tutorEmail, email} = tutor || {};
    return (
        <div className='flex gap-2 shadow-md p-2'>
            <div>
                <img className='w-48' src={image} alt="" />
            </div>
            <div className='text-text-light flex flex-col'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='font-medium grow'>{language}</p>
                <button className='btn bg-accent-light'>View Details</button>
            </div>
        </div>
    );
};

export default TutorCard;