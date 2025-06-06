import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"


const States = () => {
    const [tutorials, setTutorials] = useState([]);
    const [tutors, setTutors] = useState([]);
    const [reviews, setReviews] = useState(0);
    const [languages, setLanguages] = useState(0);

    useEffect(() => {
        // Fetch the data only once
        axios.get(`https://learn-lang-server-rose.vercel.app/tutors`)
            .then(res => {
                setTutorials(res.data);

                // Process unique tutors
                const uniqueEmails = [];
                const emailSet = new Set();
                for (let i = 0; i < res.data.length; i++) {
                    const email = res.data[i].email;
                    if (!emailSet.has(email)) {
                        emailSet.add(email);
                        uniqueEmails.push(email);
                    }
                }
                setTutors(uniqueEmails);

                // Calculate total reviews
                let totalReviews = 0;
                for (let i = 0; i < res.data.length; i++) {
                    totalReviews += res.data[i].review;
                }
                setReviews(totalReviews);

                // Calculate unique languages
                const uniqueLanguages = [];
                for (let i = 0; i < res.data.length; i++) {
                    if (!uniqueLanguages.includes(res.data[i].language)) {
                        uniqueLanguages.push(res.data[i].language);
                    }
                }
                setLanguages(uniqueLanguages.length);
            });
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeIn }}
    >
        <div className='py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 bg-accent-light' >
            <div className='text-center'>
                <h2 className='font-bold text-4xl '>{tutors.length}+</h2>
                <p className='font-medium '>Tutor</p>
            </div>
            <div className='text-center border-l-2'>
                <h2 className='font-bold text-4xl '>{reviews}+</h2>
                <p className='font-medium '>Reviews</p>
            </div>
            <div className='text-center md:border-l-2 mt-3 md:mt-0'>
                <h2 className='font-bold text-4xl '>{languages}+</h2>
                <p className='font-medium '>Languages</p>
            </div>
            <div className='text-center border-l-2 mt-3 md:mt-0'>
                <h2 className='font-bold text-4xl '>{tutors.length}+</h2>
                <p className='font-medium '>Users</p>
            </div>
        </div>
            </motion.div>
    );
};

export default States;
