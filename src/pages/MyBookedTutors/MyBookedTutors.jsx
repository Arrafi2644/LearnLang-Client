import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import MyBookedTutorCard from '../../components/MyBookedTutorCard/MyBookedTutorCard';
import useAuth from '../../hooks/UseAuth';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyBookedTutors = () => {
    const [bookedTutors, setBookedTutors] = useState()
    const {user} = useAuth()
    const email = user?.email;
    const axiosSecure = useAxiosSecure()
    // console.log(bookedTutors);

    useEffect(()=>{
      axiosSecure.get(`/my-booked-tutors/${email}`)
      .then(res => {
        // console.log(res.data);
        const tutors = res.data;
        // const filteredTutors = tutors.filter(tutor => tutor.email === email)
        //   setBookedTutors(filteredTutors)
        setBookedTutors(res.data)
      })
      .catch(err => {
        // console.log(err);
      })
    }, [])

    return (
      <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
  >
        <div className='my-10 md:my-14 px-4 container mx-auto'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl md:text-4xl text-primary-light font-bold'>Your Booked Tutors</h2></div>
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                  bookedTutors.length > 0 ?
                    bookedTutors?.map(tutor => <MyBookedTutorCard key={tutor._id} tutor={tutor}></MyBookedTutorCard>)
                    : <div className='w-full mt-24'>
                    <h2 className='text-xl font-bold text-center text-accent-light'>No tutor found for this language.</h2>
                </div>
                }
            </div>
        </div>
        </motion.div>
    );
};

export default MyBookedTutors;