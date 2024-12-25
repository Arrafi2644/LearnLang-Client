import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import MyBookedTutorCard from '../../components/MyBookedTutorCard/MyBookedTutorCard';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';

const MyBookedTutors = () => {
    const [bookedTutors, setBookedTutors] = useState()
    const {user} = useAuth()
    const email = user?.email;
    // console.log(bookedTutors);

    useEffect(()=>{
      axios.get(`http://localhost:5000/my-booked-tutors/${email}`)
      .then(res => {
        console.log(res.data);
        const tutors = res.data;
        // const filteredTutors = tutors.filter(tutor => tutor.email === email)
        //   setBookedTutors(filteredTutors)
        setBookedTutors(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }, [])

    return (
        <div className='my-10 md:my-14'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl text-text-light font-bold'>Your Tutors</h2></div>
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    bookedTutors?.map(tutor => <MyBookedTutorCard key={tutor._id} tutor={tutor}></MyBookedTutorCard>)
                }
            </div>
        </div>
    );
};

export default MyBookedTutors;