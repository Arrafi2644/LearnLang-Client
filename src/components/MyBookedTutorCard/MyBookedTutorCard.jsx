import React from 'react';

const MyBookedTutorCard = ({tutor}) => {
    
    const {_id, name, image, language, price, tutorEmail, email, tutorImage} = tutor || {};
    const handleReview = (id) => {
        console.log(id);
    }
    return (
        <div className='flex gap-2 shadow-md p-2'>
            <div>
                <img className='w-48' src={tutorImage} alt="" />
            </div>
            <div className=' flex flex-col'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='font-medium'>{language}</p>
                <p className='font-medium grow'>Price: ${price}</p>

                <button onClick={()=>handleReview(_id)} className='btn text-text-light bg-accent-light py-3 min-h-0 h-auto'>Review</button>
            </div>
        </div>
    );
};

export default MyBookedTutorCard;