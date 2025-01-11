import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

  const { signupUser, updateUser } = useAuth()
  const navigate = useNavigate()
  // console.log(signupUser);

  const handleSignUpUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // console.log({ name, email, photo, password });

    signupUser(email, password)
    .then(res => {
      // console.log(res.user);

      updateUser({displayName: name, photoURL: photo})
      .then(res => {
        // console.log("user created successfully");
        // alert("User created successfully")
        toast.success("User created successfully", {
         position: 'top-center'
        })
        navigate('/')
      })
      .catch(error => {
        // console.log(error);
      })

    })
    .catch(error => {
      toast.error("Something went wrong! Please try again.");
    })


  }

  return (
    <div className="hero bg-background-light w-full my-10 md:my-14 px-4">

      <div className="hero-content flex-col w-full md:w-11/12 lg:w-4/5">
        <div className="text-center lg:text-left w-full ">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-light">Signup Now</h1>
          <p className="py-6 text-center text-text-light">
            Create an account to connect with expert tutors and start your learning adventure.
          </p>
        </div>
        <div className="card bg-secondary-light rounded-lg shadow-2xl w-full">
           <button className="btn my-6 mx-8 bg-accent-light hover:bg-accent-dark text-text-light">Signup With Google</button>
           <div className="divider mx-8">OR</div>
          <form onSubmit={handleSignUpUser} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light font-semibold">Name</span>
              </label>
              <input name='name' type="text" placeholder="Name" className="input input-bordered placeholder:text-text-light bg-white" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light font-semibold">Email</span>
              </label>
              <input name='email' type="email" placeholder="Email" className="input input-bordered placeholder:text-text-light bg-white" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light font-semibold">Photo </span>
              </label>
              <input name='photo' type="url" placeholder="Photo Url" className="input input-bordered placeholder:text-text-light bg-white" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light font-semibold">Password</span>
              </label>
              <input name='password' type="password" placeholder="Password" className="input input-bordered placeholder:text-text-light bg-white" required />
            </div>

            <div className="form-control mt-6 col-span-1 md:col-span-2">
              <button className="btn bg-accent-light hover:bg-accent-dark text-text-light">Sign Up</button>
            </div>
          </form>
          <div className='p-8 pt-4'>
            <p> Already have an account ? <Link to='/login' className='text-primary-light font-medium'>Login</Link></p>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;