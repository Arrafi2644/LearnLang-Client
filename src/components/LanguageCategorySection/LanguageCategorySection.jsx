import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { LuReceiptJapaneseYen, LuReceiptRussianRuble } from 'react-icons/lu';
import { RiEnglishInput } from 'react-icons/ri';
import { TbAlphabetArabic, TbAlphabetKorean } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const LanguageCategorySection = () => {
    return (
        <div className='mt-10 md:mt-14'>
            <h2 className='text-3xl mb-4 font-bold text-primary-light text-center'>Choose Your Language</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>English Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>Spanish Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>French Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>German Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><RiEnglishInput></RiEnglishInput></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>Mandarin Chinese Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><LuReceiptJapaneseYen></LuReceiptJapaneseYen></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>Japanese Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><TbAlphabetArabic></TbAlphabetArabic></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>Arabic Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><LuReceiptRussianRuble></LuReceiptRussianRuble></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>Russian Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
                <Link to='/find-tutors' className='border p-4 rounded-sm flex gap-2 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                    <span className='font-bold text-2xl'><TbAlphabetKorean /></span>
                    <div className='text-text-light'>
                        <h2 className='text-base md:text-xl font-semibold '>Korean Tutor</h2>
                        <p>30+ Tutor</p>
                    </div>
                    </div>
                    <span className='justify-end'><FaAngleRight></FaAngleRight></span>
                </Link>
            </div>
            
        </div>
    );
};

export default LanguageCategorySection;