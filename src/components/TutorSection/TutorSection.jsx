import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TutorSection = () => {
    const [tutors, setTutors] = useState([])

    useEffect(()=>{
        axios.get("https://learn-lang-server-rose.vercel.app/tutors")
        .then(res => {
            console.log(res.data);
            setTutors(res.data)
        })
    }, [])
    return (
        <div className='mt-10 md:mt-14 mx-4'>
        <h2 className=' mb-4 font-bold  text-center text-3xl md:text-4xl text-primary-light'>Our Expert Tutors</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            
        </div>

    </div>
    );
};

export default TutorSection;