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
    //     axios.get(`http://localhost:5000/tutors/${search}`)
    //         .then(res => {
    //             setTutors(res.data);
    //             setAllTutors(res.data);
    //         })
    // }, [search])


    // useEffect(() => {
    //     axios.get(`http://localhost:5000/tutors/language/${category}`)
    //         .then(res => {
    //             setTutors(res.data);
    //             setAllTutors(res.data);
    //         })
    // }, [category])

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/tutors`)
    //         .then(res => {
    //             setTutors(res.data);
    //             setAllTutors(res.data);
    //         })
    // }, [])

    useEffect(() => {
        // let url = `http://localhost:5000/tutors?language=${category}`
        // let url = `http://localhost:5000/tutors?language=${category}`
        // if (search) {
        //     url = `http://localhost:5000/tutors?search=${search}`
        // }
        // if (category) {
        //     url = `http://localhost:5000/tutors?category=${category}`
        // }

        let url = `http://localhost:5000/tutors`
        if(category){
            url = `http://localhost:5000/tutors?language=${category}`
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
        <div className='my-10 md:my-14 px-4 container mx-auto'>
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