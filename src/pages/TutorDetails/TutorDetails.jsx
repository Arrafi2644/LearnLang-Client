import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';
import toast from 'react-hot-toast';

const TutorDetails = () => {
    const {user} = useAuth()
    const {allTutors} = useAuth()
    const tutor = useLoaderData()
    const [bookedTutors, setBookedTutors] = useState([])
  
    

    console.log(tutor);
 
    const {_id, name, tutorImage, language, price, email, description, review } = tutor || {}
    tutor.userEmail = user?.email;

    console.log(tutor);

    const bookedTutor = {
        courseId : _id,
        name: name,
        tutorImage : tutorImage,
        price : price,
        language: language,
        userEmail: user?.email

    }

    console.log("tutor", email);
    console.log("user", user?.email);

    const handleMyBookedTutor = (id) => {
        console.log("Booked tutor", id);

        // const newTutor = allTutors.find(tutor => tutor._id === id)
        // console.log(newTutor);
        // setBookedTutors([...bookedTutors, tutor])

        if(email ===  tutor.userEmail){
            toast.error("You cannot book your own tutorial!")
            return;
        }
        
       


        axios.post('https://learn-lang-server-rose.vercel.app/my-booked-tutors', bookedTutor)
        .then(res => {
            console.log(res.data);
            toast.success("Tutor booked successfully!")
        })
        .catch(err => {
            console.log(err);
            toast.error("Something went wrong!")
        })

    }
    // console.log(bookedTutors);

    
    return (
        <div className='flex flex-col md:flex-row gap-3 shadow-md p-2'>
            <div>
                <img referrerPolicy='no-referrer' className='w-full md:w-60 ' src={tutorImage} alt="" />
            </div>
            <div className=' flex flex-col'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='font-medium grow'>Language: {language}</p>
                <p className='font-medium grow'>Price: ${price}</p>
               
                <p className='font-medium'>Reviews: {review}</p>
                
              
                <p className='font-medium grow'>{description}</p>
               
                <Link to={`/tutor/${_id}`} onClick={()=>handleMyBookedTutor(_id)}  className='btn btn-sm text-text-light bg-accent-light min-h-0 h-auto p-3 max-w-40 text-sm'>Book Now </Link>
            </div> 
              
            
        </div>
    );
};

export default TutorDetails;