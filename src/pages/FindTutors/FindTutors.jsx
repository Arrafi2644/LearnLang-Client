import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import axios from 'axios';
import useAuth from '../../hooks/UseAuth';

const FindTutors = () => {
    const { setAllTutors } = useAuth()
    const [tutors, setTutors] = useState([])
    const [search, setSearch] = useState("")
    const params = useParams()
    // console.log(params);
    // console.log(params)
    const category = params.category
    // console.log(category);



    // useEffect(() => {
    //     axios.get(`https://learn-lang-server-rose.vercel.app/tutors/${search}`)
    //         .then(res => {
    //             setTutors(res.data);
    //             setAllTutors(res.data);
    //         })
    // }, [search])


    // useEffect(() => {
    //     axios.get(`https://learn-lang-server-rose.vercel.app/tutors/${category}`)
    //         .then(res => {
    //             setTutors(res.data);
    //             setAllTutors(res.data);
    //         })
    // }, [category])

    // useEffect(() => {
    //     axios.get(`https://learn-lang-server-rose.vercel.app/tutors`)
    //         .then(res => {
    //             setTutors(res.data);
    //             setAllTutors(res.data);
    //         })
    // }, [])

    useEffect(() => {
        let url = `https://learn-lang-server-rose.vercel.app/tutors`
        if (search) {
            url = `https://learn-lang-server-rose.vercel.app/tutors/${search}`
        }
        if (category) {
            url = `https://learn-lang-server-rose.vercel.app/tutors/${category}`
        }

        axios.get(url)
            .then(res => {
                setTutors(res.data)
                setAllTutors(res.data)
            }
            )

    }, [setTutors, search, category])



    // const handleTutorDetails = (id) => {
    //     console.log(id);
    //     const tutor = tutors.find(tutor => tutor._id === id)
    //     console.log(tutor);
    // }

    return (
        <div className='my-10 md:my-14'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl font-bold'>Find Your Tutor</h2></div>
                <div className="join">
                    <div>
                        <div className='flex justify-center'>
                            <input onChange={(e) => setSearch(e.target.value)} className="input input-bordered join-item" placeholder="Search" />
                            <button className="btn join-item text-text-light bg-accent-light">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    tutors.map(tutor => <TutorCard key={tutor._id}
                        tutor={tutor}
                    // handleTutorDetails={handleTutorDetails}
                    ></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;