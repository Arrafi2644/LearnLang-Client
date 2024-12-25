import React from 'react';
import { Link } from 'react-router-dom';

const TutorCard = ({tutor, handleTutorDetails}) => {
    console.log(tutor);
    const {_id, name, tutorImage, language, price, tutorEmail, email} = tutor;
    return (
        <div className='flex gap-2 shadow-md p-2'>
            <div>
                <img className='w-40' src={tutorImage} alt="" />
            </div>
            <div className='text-text-light flex flex-col'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='font-medium grow'>{language}</p>
                <Link to={`/tutor/${_id}`} onClick={()=>handleTutorDetails(_id)} className='btn bg-accent-light min-h-0 h-auto p-3 text-sm'>View Details</Link>
            </div>
        </div>
    );
};

export default TutorCard;