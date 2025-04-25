import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import axios from 'axios';
import useAuth from '../../hooks/UseAuth';
import { IoSearchOutline } from 'react-icons/io5';

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

        let url = `https://learn-lang-server-rose.vercel.app/tutors`
        if (category) {
            url = `https://learn-lang-server-rose.vercel.app/tutors?language=${category}`
        }

        axios.get(url)
            .then(res => {
                setTutors(res.data)
                setAllTutors(res.data)
            }
            )

    }, [setTutors, category])


    const handleSearch = (e) => {
        // console.log(e.target.value);
        const keyword = e.target.value;

        axios.get(`https://learn-lang-server-rose.vercel.app/tutors/search/language/${keyword}`)
            .then(res => {
                // console.log(res.data);
                setTutors(res.data)

            })
            .catch(err => {
                console.log(err);
            })
    }


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
        <div className='my-10 md:my-14 px-4 container mx-auto min-h-screen'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl md:text-4xl text-primary-light font-bold text-center md:text-left'>Find Your Tutor</h2></div>
                <div className='flex items-center gap-4'>
                    {/* search input  */}
                    <label className="input relative flex  items-center bg-white border border-gray-400 min-h-0 h-auto p-2 px-4 pl-2 w-full">

                        <span className='pr-1'><IoSearchOutline /> </span>
                        <input type="search" className="grow" placeholder="Search" />

                    </label>

                    {/* sort  */}
                    <fieldset className="fieldset min-h-0 h-auto border border-gray-400 rounded-md">
                        <select defaultValue="Pick a browser" className="select min-h-0 h-auto py-1.5 px-4 min-w-40 bg-white">
                            <option>Sort By</option>
                            <option>Ascending</option>
                            <option>Descending</option>
                        </select>
                    </fieldset>
                </div>


            </div>
            {
                tutors.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    {
                        tutors.map(tutor => <TutorCard key={tutor._id}
                            tutor={tutor}
                        // handleTutorDetails={handleTutorDetails}
                        ></TutorCard>)

                    }
                </div>
                    : <div className='w-f'>
                        <h2 className='text-xl font-bold text-center'>No tutor found for this language.</h2>
                    </div>
            }

        </div>
    );
};

export default FindTutors;