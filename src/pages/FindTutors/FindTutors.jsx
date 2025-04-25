import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import TutorCard from '../../components/TutorCard/TutorCard';
import axios from 'axios';
import useAuth from '../../hooks/UseAuth';
import { IoSearchOutline } from 'react-icons/io5';
import useTutors from '../../hooks/useTutors';

const FindTutors = () => {
    const location = useLocation()
    const [category, setCategory] = useState(location?.state || "")
    const [sort, setSort] = useState("")
    const [search, setSearch] = useState("")
    const [tutors, isLoading, refetch] = useTutors(sort, search, category)

    return (
        <div className='my-10 md:my-14 px-4 container mx-auto min-h-screen'>
            <div className='flex flex-col md:flex-row gap-6 justify-center md:justify-between'>
                <div><h2 className='text-3xl md:text-4xl text-primary-light font-bold text-center md:text-left'>Find Your Tutor</h2></div>
                <div className='flex items-center gap-4'>
                    {/* search input  */}
                    <label className="input relative flex  items-center bg-white border border-gray-400 min-h-0 h-auto p-2 px-4 pl-2 w-full">

                        <span className='pr-1'><IoSearchOutline /> </span>
                        <input type="search" onChange={(e) => setSearch(e.target.value)} className="grow" placeholder="Search" />

                    </label>

                    {/* sort  */}
                    <fieldset className="fieldset min-h-0 h-auto border border-gray-400 rounded-md">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="select text-sm min-h-0 h-auto py-2 px-4 min-w-40 bg-white"
                        >
                            <option value="" disabled>Sort By</option>
                            <option value="asc">Price (Ascending)</option>
                            <option value="desc">Price (Descending)</option>
                        </select>

                    </fieldset>

                </div>


            </div>
            {
                isLoading ?
                    <span className="loading loading-ring loading-lg text-primary-light  absolute left-1/2 -translate-x-1/2 top-44"></span>
                    :
                    <div>

                        {
                            tutors.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                                {
                                    tutors.map(tutor => <TutorCard key={tutor._id}
                                        tutor={tutor}
                                    // handleTutorDetails={handleTutorDetails}
                                    ></TutorCard>)

                                }
                            </div>
                                : <div className='w-full mt-24'>
                                    <h2 className='text-xl font-bold text-center text-accent-light'>No tutor found for this language.</h2>
                                </div>
                        }
                    </div>
            }

        </div>
    );
};

export default FindTutors;