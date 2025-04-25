import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { ThemeContext } from '../../context/ThemeContext';
import { TbThumbUp } from 'react-icons/tb';

const MyBookedTutorCard = ({tutor}) => {
    
    const {themeColor} = useContext(ThemeContext)
    // console.log(tutor)

    const {_id, name, image, language, price, tutorEmail, email, tutorImage, courseId} = tutor || {};

    // console.log(_id);

    const handleReview = (id) => {
        // console.log(id);

        // axios.post(`http://localhost:5000/tutors/${id}`)

        axios.put(`http://localhost:5000/tutors/${id}`, tutor )
        .then(res => {
            // console.log(res.data);
            if(res.data.modifiedCount > 0) {
                toast.success("Review submitted successfully!")
            }
        })
        .catch(err => {
            // console.log(err);
            toast.error("Review failed!")
        })
        
        // axios.put(`http://localhost:5000/my-booked-tutors/${id}`, )
        // .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

    }
    return (
        <div className={`flex gap-2 shadow-md p-2 ${themeColor === "light" ? 'text-text-light' : 'text-text-dark'}`}>
            <div>
                <img className='w-48 h-48 object-cover' src={tutorImage} alt="" />
            </div>
            <div className=' flex flex-col'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='font-medium'>{language}</p>
                <p className='font-medium grow'>Price: ${price}</p>

                <button onClick={()=>handleReview(_id)} className='btn text-text-light bg-accent-light hover:bg-accent-dark py-2 min-h-0 h-auto'><TbThumbUp size={24}></TbThumbUp></button>
            </div>
        </div>
    );
};

export default MyBookedTutorCard;