import React from 'react';

const LatestBlog = () => {
    return (
        <div className='my-10 md:my-14'>
            <h2 className='text-3xl font-bold text-center'>Latest Blog & Articles</h2>
            <p className='text-center mb-6'>Stay updated with our latest blogs, featuring insights and tips to enhance your learning journey</p>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className="card card-compact bg-base-100 shadow-xl border rounded-none">
                    <figure className='p-4'>
                        <img
                        className='w-full h-52 object-cover rounded-lg'
                            src="https://i.ibb.co.com/JB5mFLw/image.png"
                            alt="article" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Why Are You Thinking About Learning Better English?</h2>
                        <p className='font-medium'>November 29, 2024</p>
                        <p className='font-medium'>Uncover the benefits of improving your English skills, from career growth to global communication.</p>
                         <button className="btn bg-accent-light text-text-light">Read more</button>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl border rounded-none">
                    <figure className='p-4'>
                        <img
                        className='w-full h-52 object-cover rounded-lg'
                            src="https://i.ibb.co.com/JQnVTFr/image.png"
                            alt="article" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Mastering a New Language: Tips for Beginners</h2>
                        <p className='font-medium'>December 19, 2024</p>
                        <p className='font-medium'>Discover practical strategies and resources to kickstart your language learning journey effectively.</p>
                         <button className="btn bg-accent-light text-text-light">Read more</button>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl border rounded-none">
                    <figure className='p-4'>
                        <img
                        className='w-full h-52 object-cover rounded-lg'
                            src="https://i.ibb.co.com/pxf1g76/image.png"
                            alt="article" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Top 5 Tools for Online Language Learning</h2>
                        <p className='font-medium'>November 20, 2024</p>
                        <p className='font-medium'>Explore the best tools and platforms to make your online language learning experience seamless and enjoyable.</p>
                         <button className="btn bg-accent-light text-text-light">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;