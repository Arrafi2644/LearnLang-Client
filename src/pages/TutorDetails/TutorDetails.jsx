import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { ThemeContext } from '../../context/ThemeContext';

const TutorDetails = () => {
    const { user } = useAuth()
    const { allTutors } = useAuth()
    const {themeColor} = useContext(ThemeContext)
    // const tutor = useLoaderData()
    const [bookedTutors, setBookedTutors] = useState([])
    const axiosInstance = useAxiosSecure()
    const [tutor, setTutor] = useState({})



    const params = useParams()
    // console.log(params.id);
    const id = params.id;

    useEffect(() => {
        axios.get(`http://localhost:5000/tutors/${id}`)
            .then(res => {
                // console.log(res.data);
                setTutor(res.data)
            })
    }, [])

    // console.log(tutor);

    const { _id, name, tutorImage, language, price, email, description, review } = tutor || {}
    tutor.userEmail = user?.email;

    // console.log(tutor);

    const bookedTutor = {
        courseId: _id,
        name: name,
        tutorImage: tutorImage,
        price: price,
        language: language,
        userEmail: user?.email

    }

    // console.log("tutor", email);
    // console.log("user", user?.email);

    const handleMyBookedTutor = (id) => {
        // console.log("Booked tutor", id);

        // const newTutor = allTutors.find(tutor => tutor._id === id)
        // console.log(newTutor);
        // setBookedTutors([...bookedTutors, tutor])

        if (email === tutor.userEmail) {
            toast.error("You cannot book your own tutorial!")
            return;
        }


        axios.post('http://localhost:5000/my-booked-tutors', bookedTutor)
            .then(res => {
                // console.log(res.data);
                toast.success("Tutor booked successfully!")
            })
            .catch(err => {
                // console.log(err);
                toast.error("Something went wrong!")
            })

    }
    // console.log(bookedTutors);

    //   axiosInstance.post('http://localhost:5000/my-booked-tutors', bookedTutor)
    // .then(res => {
    //     console.log(res.data);
    //     toast.success("Tutor booked successfully!")
    // })


    return (
        <div className='flex flex-col md:flex-row gap-3 shadow-md p-2'>
            <div>
                <img referrerPolicy='no-referrer' className='w-full md:w-60 md:h-60 object-cover ' src={tutorImage} alt="" />
            </div>
            <div className={`flex flex-col ${themeColor === "light" ? 'text-text-light' : 'text-text-dark'}`}>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='font-medium grow'>Language: {language}</p>
                <p className='font-medium grow'>Price: ${price}</p>

                <div className='flex items-center gap-2'>
                    <p className='font-medium'>Reviews: </p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                    ({review})
                </div>


                <p className='font-medium grow'>{description}</p>

                <Link to={`/tutor/${_id}`} onClick={() => handleMyBookedTutor(_id)} className='btn btn-sm text-text-light bg-accent-light hover:bg-accent-dark min-h-0 h-auto p-3 max-w-40 text-sm'>Book Now </Link>
            </div>


        </div>
    );
};

export default TutorDetails;