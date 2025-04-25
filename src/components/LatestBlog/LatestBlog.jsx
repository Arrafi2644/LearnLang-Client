import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"


const LatestBlog = () => {
     const {themeColor} = useContext(ThemeContext)
        const [blogs, setBlogs] = useState([])
    
        useEffect(()=>{
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                const latest = data.slice(0, 3);
                setBlogs(latest)
            })
    
        }, [])
    return (
        <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeIn }}
    >
        <div className='my-10 md:my-14 mx-4'>
            <h2 className='text-3xl md:text-4xl text-primary-light font-bold text-center'>Latest Blog & Articles</h2>
            <p className={`text-center mb-6 ${themeColor === 'light' ? 'text-text-light' : 'text-text-dark'}`}>Stay updated with our latest blogs, featuring insights and tips to enhance your learning journey</p>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                  blogs.map(blog => <div key={blog.blogId} className="card card-compact bg-secondary-light text-text-light shadow-xl border rounded-lg">
                    <figure className='p-6'>
                        <img
                        className='w-full h-52 object-cover rounded-lg'
                            src={blog.image}
                            alt="article" />
                    </figure>
                    <div className="leading-8 p-6 flex flex-col">
                        <h2 className="card-title font-bold">{blog.title}</h2>
                        <p className='font-medium'>{blog.date}</p>
                        <p className='font-medium '>{blog.description}</p>
                        
                    </div>
                </div>)
                }
            </div>
        </div>
        </motion.div>
    );
};

export default LatestBlog;