import React from 'react';

const MyBookedTutorCard = ({tutor}) => {
    
    const {_id, name, image, language, price, tutorEmail, email} = tutor || {};
    return (
        <div className='flex gap-2 shadow-md p-2'>
            <div>
                <img className='w-48' src={image} alt="" />
            </div>
            <div className='text-text-light flex flex-col'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='font-medium'>{language}</p>
                <p className='font-medium grow'>Price: ${price}</p>

                <button className='btn bg-accent-light py-3 min-h-0 h-auto'>Review</button>
            </div>
        </div>
    );
};

export default MyBookedTutorCard;