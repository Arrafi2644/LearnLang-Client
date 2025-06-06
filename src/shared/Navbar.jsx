import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';
import { Tooltip } from 'react-tooltip';
import toast from 'react-hot-toast';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const {user, logout, loading} = useAuth()
    // console.log(user?.photoURL);   const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const {themeColor, setThemeColor} = useContext(ThemeContext)
    // const { user, loading, } = useAuth()


    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
            setThemeColor("dark")
        } else {
            setTheme("light")
            setThemeColor("light")
        }
    }
    console.log(themeColor);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    // console.log(theme);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/find-tutors'>Find Tutor</NavLink></li>
        <li><NavLink to='/blogs'>Blog</NavLink></li>

        {
            user && <>
            <li><NavLink to='/add-tutorial'>Add Tutorial</NavLink></li>
        <li><NavLink to='/my-tutorials'>My Tutorials</NavLink></li>
        <li><NavLink to='/my-booked-tutors'>My Booked Tutors</NavLink></li>
            </>
        }
    </>

const handleSignout = ()=>{
    // console.log(logout);
    logout()
    .then(res => {
    //   console.log(res);
      toast.success("Logout successful")
    })
    .catch(error => {
    //   console.log(error);
      toast.error("Something wrong! Try again.")
    }) 
  }
    return (

        <div className={`bg-[#EB5A3C] sticky top-0 left-0 z-20`}>
            <div className="navbar container mx-auto px-4">
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
                    {/* <a className=" flex font-bold text-xl pl-0 cursor-pointer"><span className='text-blue-500'>Learn</span><span className='text-green-500'>Lang</span></a> */}
                    <Link to='/' className=" flex flex-col items-center font-bold pl-0 cursor-pointer">
                        <img className='w-6' src="https://i.ibb.co.com/PgkCR6S/language-logo.png" alt="" />
                        <span >LEARNLANG</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 `}>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end pr-0 gap-1">
                <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} checked={theme == "light" ? false : true} />

                        {/* sun icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                      {
                        user?.email? <div className='flex gap-1 items-center'>
                            <img className='h-10 w-10 rounded-full' referrerPolicy='no-referrer' id='userImg' src={user?.photoURL} alt="" />
                        <Tooltip className='absolute z-10' anchorId="userImg" place='bottom' content={user?.displayName} /> 
                        <Link onClick={handleSignout} className="btn text-text-light bg-accent-light hover:bg-accent-dark min-h-0 h-auto py-3 px-4">Logout</Link>
                        </div>
                            :
                            <Link to='/login' className="btn text-text-light bg-accent-light hover:bg-accent-dark  min-h-0 h-auto py-3 px-4">Login</Link>
                      } 


                  
                    
                </div>
            </div>
        </div>
      
    );
};

export default Navbar;