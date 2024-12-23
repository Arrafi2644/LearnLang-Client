import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-background-light my-10 md:my-14 rounded-lg min-h-screen">
                
        <div className="hero-content flex-col w-full md:w-11/12 lg:w-4/5">
          <div className="text-center lg:text-left w-full ">
           <h1 className="text-3xl font-bold text-center">Login Now</h1>
             <p className="py-6 text-center">
             Access your account to find and book the best tutors for your learning journey.
             </p>
          </div>
          <div className="card bg-base-100 w-full rounded-lg shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered" required />
              </div>
              
              <div className="form-control mt-6 col-span-1 md:col-span-2">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className='p-8 pt-4'>
                <p>Don't have any account ? <Link to='/signup' className='text-primary-light font-medium'>Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;