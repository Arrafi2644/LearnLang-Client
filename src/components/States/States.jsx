import React from 'react';

const States = () => {
    return (
        <div className='mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <div className='text-center '>
                <h2 className='font-bold text-4xl text-text-light'>230+</h2>
                <p className='font-medium text-text-light'>Tutor</p>
            </div>
            <div className='text-center '>
                <h2 className='font-bold text-4xl text-text-light'>1250+</h2>
                <p className='font-medium text-text-light'>Reviews</p>
            </div>
            <div className='text-center '>
                <h2 className='font-bold text-4xl text-text-light'>10+</h2>
                <p className='font-medium text-text-light'>Languages</p>
            </div>
            <div className='text-center '>
                <h2 className='font-bold text-4xl text-text-light'>15200+</h2>
                <p className='font-medium text-text-light'>Users</p>
            </div>
            
        </div>
    );
};

export default States;