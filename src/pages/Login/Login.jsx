import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {

  const { loginUser, signInWithGoogle, logout } = useAuth();


  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    loginUser(email, password)
    .then(res => {
      console.log(res.user);

      toast.success("Login successfully!")
    })
    .catch(error => {
      console.log(error)
      toast.error("Incorrect email or password!")
    })

  }

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
    .then(res => {
      console.log(res.user);
  
      toast.success("Login successful!")
    })
    .catch(error => {
      toast.error("Some thing went wrong! Please try again.")
    })
    
  }

 

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
        <button onClick={handleLoginWithGoogle} className="btn my-6 mx-8">Login With Google</button>
        <div className="divider mx-8">OR</div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
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