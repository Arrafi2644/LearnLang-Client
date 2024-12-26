import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaLocationDot, FaMessage } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-background-dark text-text-dark mt-10 md:mt-10 '>
            <div className='max-w-7xl w-11/12 mx-auto'>
                <footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  py-10">
                  <div>
                  <aside >
                        <h4 className='flex font-bold text-3xl mb-2'><span className='text-blue-500'>Learn</span><span className='text-green-500'>Lang</span></h4>
                        <p>
                            Connect with expert tutors globally <br />  for  personalized learning and language mastery.
                        </p>
                        <div className='flex gap-2 mt-2 text-2xl'>
                            <Link><FaFacebook></FaFacebook></Link>
                            <Link><FaInstagram></FaInstagram></Link>
                            <Link><FaTwitter></FaTwitter></Link>
                            <Link><FaLinkedin></FaLinkedin></Link>
                        </div>
                    </aside>
                  </div>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Courses</a>
                        <a className="link link-hover">Tutors</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Useful Links</h6>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms and Conditions</a>
                        <a className="link link-hover">Support</a>
                        <a className="link link-hover">Faq</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Stay Connected</h6>
                        <div className="join my-2">
                            <input className="input input-bordered join-item lg:max-w-32 p-4 max-h-10" placeholder="Email" />
                            <button className=" px-3 cursor-pointer hover:bg-accent-dark transition-all duration-300 join-item rounded-lg text-text-light  bg-accent-light max-h-10">Subscribe</button>
                        </div>
                        <p className="link link-hover flex gap-1 items-center"><span><FaLocationDot></FaLocationDot></span><span>Jl. Sunset Road No.815, Kuta</span></p>
                        <p className="link link-hover flex gap-1 items-center"><span><HiOutlineMail /></span><span>support@domain.com</span></p>

                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;