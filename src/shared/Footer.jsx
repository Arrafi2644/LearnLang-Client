import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaLocationDot, FaMessage } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-background-dark text-text-dark mt-10 md:mt-10 '>
            <div className='container px-4 mx-auto'>
                <footer className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6  py-10">
                  <div className='flex justify-center text-center md:justify-start md:text-left '>
                  <aside className=''>
                  <Link to='/' className=" flex flex-col font-bold text-xl pl-0 mb-1 cursor-pointer w-max justify-center items-center mx-auto md:ml-0">
                        <img className='w-6 ' src="/src/assets/lang-footer-logo.png" alt="" />
                        <span className='text-primary-light'>LEARNLANG</span>
                    </Link>
                        <p>
                            Connect with expert tutors globally <br />  for  personalized learning and language mastery.
                        </p>
                        <div className='flex gap-2 mt-2 text-2xl justify-center md:justify-self-start'>
                            <Link to='https://www.facebook.com/arrafi.rafi.1238'><FaFacebook></FaFacebook></Link>
                            <Link to='https://www.instagram.com/arrafi9214/?hl=en'><FaInstagram></FaInstagram></Link>
                            <Link to='https://www.twitter.com'><FaTwitter></FaTwitter></Link>
                            <Link to='https://www.linkedin.com/in/md-ar-rafi-fayez-joy/'><FaLinkedin></FaLinkedin></Link>
                        </div>
                    </aside>
                  </div>
                    <nav className='flex flex-col items-center md:items-start'>
                        <h6 className="footer-title">Quick Links</h6>
                        <Link to='/' className="link link-hover">Home</Link>
                        <Link to='/find-tutors' className="link link-hover">Find Tutor</Link>
                        <Link to='/add-tutorial' className="link link-hover">Add Tutorial</Link>
                        <Link to='/my-tutorials' className="link link-hover">My Tutorials</Link>
                        <Link to='my-booked-tutors' className="link link-hover">My Booked tutorial</Link>
                    </nav>
                  
                    <nav className='flex flex-col items-center md:items-start'>
                        <h6 className="footer-title">Stay Connected</h6>
                        <div className="join my-2">
                            <input className="input input-bordered join-item lg:max-w-32 p-4 max-h-10" placeholder="Email" />
                            <button className=" px-3 cursor-pointer transition-all duration-300 join-item rounded-lg text-text-light  bg-accent-light hover:bg-accent-dark max-h-10">Subscribe</button>
                        </div>
                        <p className="link link-hover flex gap-1 items-center"><span><FaLocationDot></FaLocationDot></span><span>Jl. Sunset Road No.815, Kuta</span></p>
                        <p className="link link-hover flex gap-1 items-center"><span><HiOutlineMail /></span><span>support@rafi.com</span></p>

                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;