import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import axios from 'axios';
import useAuth from '../../hooks/UseAuth';

const FindTutors = () => {
    const { setAllTutors } = useAuth()
    const [tutors, setTutors] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:5000/tutors`)
            .then(res => {
                setTutors(res.data);
                setAllTutors(res.data);
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/tutors/${search}`)
            .then(res => {
                setTutors(res.data);
                setAllTutors(res.data);
            })
    }, [search])



    const handleTutorDetails = (id) => {
        console.log(id);
        const tutor = tutors.find(tutor => tutor._id === id)
        console.log(tutor);


    }

    return (
        <div className='my-10 md:my-14'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl text-text-light font-bold'>Find Your Tutor</h2></div>
                <div className="join">
                    <div>
                        <div className='flex justify-center'>
                            <input onChange={(e)=>setSearch(e.target.value)} className="input input-bordered join-item" placeholder="Search" />
                            <button className="btn join-item bg-accent-light">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    tutors.map(tutor => <TutorCard key={tutor._id}
                        tutor={tutor}
                        handleTutorDetails={handleTutorDetails}
                    ></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;