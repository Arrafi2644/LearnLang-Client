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
    
    // console.log(params);



    // useEffect(() => {
    //     axios.get(`https://learn-lang-server-rose.vercel.app/tutors/${search}`)
    //         .then(res => {
    //             setTutors(res.data);
    //             setAllTutors(res.data);
    //         })
    // }, [search])


    // useEffect(() => {
    //     axios.get(`https://learn-lang-server-rose.vercel.app/tutors/language/${category}`)
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
        // let url = `https://learn-lang-server-rose.vercel.app/tutors?language=${category}`
        // let url = `https://learn-lang-server-rose.vercel.app/tutors?language=${category}`
        // if (search) {
        //     url = `https://learn-lang-server-rose.vercel.app/tutors?search=${search}`
        // }
        // if (category) {
        //     url = `https://learn-lang-server-rose.vercel.app/tutors?category=${category}`
        // }

        let url = `https://learn-lang-server-rose.vercel.app/tutors`
        if(category){
            url = `https://learn-lang-server-rose.vercel.app/tutors?language=${category}`
        }

        axios.get(url)
            .then(res => {
                setTutors(res.data)
                setAllTutors(res.data)
            }
            )

    }, [setTutors, category])



    const handleSort = () => {
        const allTutors = tutors;
        // console.log(allEquipments);
        // console.log("clicked on sort");
        const sortAllTutors = [...allTutors].sort(function (a, b) {
            return a.price - b.price
        })

        // console.log(sortAllEquipments);

        setTutors(sortAllTutors);

    }

    return (
        <div className='my-10 md:my-14 mx-4'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl md:text-4xl text-primary-light font-bold text-center md:text-left'>Find Your Tutor</h2></div>
                <div className='flex gap-2 flex-wrap justify-center'>
                 <button onClick={handleSort} className="btn bg-accent-light hover:bg-accent-dark text-text-light px-6">Sort by price</button>
                <div className="join">
                    <div>
                        <div className='flex justify-center'>
                            <input onChange={(e) => setSearch(e.target.value)} className="input input-bordered join-item bg-white" placeholder="Search" />
                            <button className="btn join-item text-text-light bg-accent-light hover:bg-accent-dark">Search</button>
                        </div>
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