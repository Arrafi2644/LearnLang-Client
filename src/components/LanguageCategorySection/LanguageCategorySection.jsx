import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { LuReceiptJapaneseYen, LuReceiptRussianRuble } from 'react-icons/lu';
import { RiEnglishInput } from 'react-icons/ri';
import { TbAlphabetArabic, TbAlphabetKorean } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const LanguageCategorySection = () => {
    const [tutors, setTutors] = useState([])
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:5000/tutors')
            .then(res => {
                setTutors(res.data)
            })
    }, [])


    useEffect(() => {
        axios.get('/languageCategory.json')
            .then(res => setCategories(res.data))
    }, [])
    // console.log(categories);

    const handleCategory = (category) => {
        // console.log(category);
        const language = category.language;
        // console.log(language);
        
       
    }


    // console.log(tutors);
    // const categories = tutors.filter(tutor => tutor.language)
    // console.log(categories);
    return (
        <div className='mt-10 md:mt-14 mx-4'>
            <h2 className=' mb-4 font-bold  text-center text-3xl md:text-4xl text-primary-light'>Choose Your Language</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    categories.map((category, index) => <Link key={index} to={`/find-tutors/${category.language}`} onClick={()=>handleCategory(category)} className='border p-4 rounded-sm flex gap-2 items-center justify-between bg-secondary-light'>
                        <div className='flex gap-3 items-center'>
                            
                            {/* <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span> */}
                            <img className='w-10 h-10 rounded-full' src={category.logo} alt="" />
                            <div className=''>
                                <h2 className='text-base md:text-xl font-semibold '>{category.language} Tutor</h2>
                                <p>30+ Tutor</p>
                            </div>
                        </div>
                        <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                    </Link>
                    )
                }



            </div>

        </div>
    );
};

export default LanguageCategorySection;

// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//                     <div className='flex gap-3 items-center'>
{/* <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span> */ }
//     <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/BfMtHy7/image.png" alt="" />
// <div className='text-text-light'>
//     <h2 className='text-base md:text-xl font-semibold '>Spanish Tutor</h2>
//     <p>30+ Tutor</p>
// </div>
//     </div>
//     <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>
// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//     <div className='flex gap-3 items-center'>
//         <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/stXW4JQ/image.png" alt="" />
{/* <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span> */ }
//     <div className='text-text-light'>
//         <h2 className='text-base md:text-xl font-semibold '>French Tutor</h2>
//         <p>30+ Tutor</p>
//     </div>
//     </div>
//     <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>
// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//     <div className='flex gap-3 items-center'>
{/* <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span> */ }

//         <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/RDHdF9r/image.png" alt="" />
//     <div className='text-text-light'>
//         <h2 className='text-base md:text-xl font-semibold '>German Tutor</h2>
//         <p>30+ Tutor</p>
//     </div>
//     </div>
//     <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>
// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//     <div className='flex gap-3 items-center'>
{/* <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span> */ }
//         <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/sb8CY3r/image.png" alt="" />
//     <div className='text-text-light'>
//         <h2 className='text-base md:text-xl font-semibold'>Chinese Tutor</h2>
//         <p>30+ Tutor</p>
//     </div>
//     </div>
//     <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>
// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//     <div className='flex gap-3 items-center'>
//         <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/XjtzV8R/image.png" alt="" />
{/* <span className='font-bold text-2xl'><LuReceiptJapaneseYen></LuReceiptJapaneseYen></span> */ }
//     <div className='text-text-light'>
//         <h2 className='text-base md:text-xl font-semibold '>Japanese Tutor</h2>
//         <p>30+ Tutor</p>
//     </div>
//     </div>
//     <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>
// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//     <div className='flex gap-3 items-center'>
//         <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/M8Jn8rY/image.png" alt="" />
//     <span className='font-bold text-2xl'><TbAlphabetArabic></TbAlphabetArabic></span>
//     <div className='text-text-light'>
//         <h2 className='text-base md:text-xl font-semibold '>Arabic Tutor</h2>
//         <p>30+ Tutor</p>
//     </div>
//     </div>
//     <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>
// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//     <div className='flex gap-3 items-center'>
{/* <span className='font-bold text-2xl'><LuReceiptRussianRuble></LuReceiptRussianRuble></span> */ }
//         <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/93Kv7Qj/image.png" alt="" />
//     <div className='text-text-light'>
//         <h2 className='text-base md:text-xl font-semibold '>Russian Tutor</h2>
//         <p>30+ Tutor</p>
//     </div>
//     </div>
//     <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>
// <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
//     <div className='flex gap-3 items-center'>
{/* <span className='font-bold text-2xl'><TbAlphabetKorean /></span> */ }
//     <img className='w-10 h-10 rounded-full' src="https://i.ibb.co.com/dPFJDTt/image.png" alt="" />
// <div className='text-text-light'>
//     <h2 className='text-base md:text-xl font-semibold '>Korean Tutor</h2>
//     <p>30+ Tutor</p>
// </div>
// </div>
// <span className='justify-end'><FaAngleRight></FaAngleRight></span>
// </Link>