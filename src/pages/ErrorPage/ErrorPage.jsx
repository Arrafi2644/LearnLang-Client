import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='relative'>
                <img className='h-svh w-full object-cover' src="https://i.ibb.co.com/sV6J8pL/image.png" alt="" />
            </div>
            <Link to={'/'}>
                <button className="btn bg-accent-light hover:bg-accent-dark min-h-0 h-auto py-3 px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;