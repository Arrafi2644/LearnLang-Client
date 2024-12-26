import axios from 'axios';
import React from 'react';

const MyBookedTutorCard = ({tutor}) => {
    
    console.log(tutor)

    const {_id, name, image, language, price, tutorEmail, email, tutorImage, courseId} = tutor || {};
    console.log(_id);

    const handleReview = (id) => {
        console.log(id);

        // axios.post(`https://learn-lang-server-rose.vercel.app/tutors/${id}`)

        axios.put(`https://learn-lang-server-rose.vercel.app/tutors/${id}`, tutor )
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        
        // axios.put(`https://learn-lang-server-rose.vercel.app/my-booked-tutors/${id}`, )
        // .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

    }
    return (
        <div className='flex gap-2 shadow-md p-2'>
            <div>
                <img className='w-48 h-48 object-cover' src={tutorImage} alt="" />
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