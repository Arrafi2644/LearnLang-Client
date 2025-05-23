import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"


const Login = () => {

  const { loginUser, signInWithGoogle, logout } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.state);

  const from = location.state;
  // console.log(from);


  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    loginUser(email, password)
    .then(res => {
      // console.log(res.user);

      toast.success("Login successfully!")
      
      // navigate(from ? form : '/')
      navigate(location.state ? location.state : '/')

    })
    .catch(error => {
      // console.log(error)
      toast.error("Incorrect email or password!")
    })

  }

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
    .then(res => {
      // console.log(res.user);
  
      toast.success("Login successful!")

      navigate(location.state ? location.state : '/')
      // console.log(res.data.user?.email);
      
    })
    .catch(error => {
      toast.error("Some thing went wrong! Please try again.")
    })
    
  }

  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: easeIn }}
>
    <div className="hero bg-white   py-12 px-4">
      <div className="hero-content flex-col md:w-11/12 lg:w-4/5">
        <div className="text-center lg:text-left w-full ">
          <h1 className="text-3xl md:text-4xl text-primary-light font-bold text-center ">Login Now</h1>
          <p className="py-6 text-center text-text-light">
            Access your account to find and book the best tutors for your learning journey.
          </p>
        </div>
        <div className="card bg-secondary-light w-full rounded-lg shadow-2xl">
        <button onClick={handleLoginWithGoogle} className="btn my-6 mx-8 btn-outline border-gray-300 hover:bg-accent-dark text-text-light"> <span><FcGoogle size={20} /></span> Login With Google</button>
        <div className="divider mx-8">OR</div>
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light font-semibold">Email</span>
              </label>
              <input name='email' type="email" placeholder="Email" className="input input-bordered bg-gray-50 border-gray-300 placeholder:text-text-light" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light font-semibold">Password</span>
              </label>
              <input name='password' type="password" placeholder="Password" className="input input-bordered  bg-gray-50 border-gray-300 placeholder:text-text-light" required />
            </div>

            <div className="form-control mt-6 col-span-1 md:col-span-2">
              <button className="btn bg-accent-light hover:bg-accent-dark text-text-light">Login</button>
            </div>
          </form>
          <div className='p-8 pt-4'>
            <p>Don't have any account ? <Link to='/signup' className='text-primary-light font-medium'>Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Login;