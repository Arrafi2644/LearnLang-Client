import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';
import { Tooltip } from 'react-tooltip';


const Navbar = () => {
    const {user, logout} = useAuth()
    console.log(user?.photoURL);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/find-tutors'>Find Tutor</NavLink></li>
        <li><NavLink to='/add-tutorial'>Add Tutor</NavLink></li>
        <li><NavLink to='/my-tutorials'>My Tutorials</NavLink></li>
        <li><NavLink to='/my-booked-tutors'>My Booked Tutors</NavLink></li>
    </>

const handleSignout = ()=>{
    logout()
    .then(res => {
      console.log(res);
      toast.success("Logout successful")
    })
    .catch(error => {
      console.log(error);
      toast.error("Something wrong! Try again.")
    }) 
  }
    return (
        <div className='bg-background-light'>
            <div className="navbar max-w-7xl w-11/12 mx-auto px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <a className=" flex font-bold text-xl pl-0 cursor-pointer"><span className='text-blue-500'>Learn</span><span className='text-green-500'>Lang</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-text-light">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end pr-0 gap-1">
                      {
                        user? <div className='flex gap-1 items-center'>
                            <img className='h-10 w-10 rounded-full' referrerPolicy='no-referrer' id='userImg' src={user?.photoURL} alt="" />
                        <Tooltip className='absolute z-10' anchorId="userImg" place='bottom' content={user?.displayName} /> 
                        <Link onClick={handleSignout} className="btn bg-accent-light">Logout</Link>
                        </div>
                            :
                            <Link to='/login' className="btn bg-accent-light">Login</Link>
                      } 


                  
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;