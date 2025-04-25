import React, { useContext } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeContext } from '../context/ThemeContext';

const MainLayout = () => {
    const {themeColor, setThemeColor} = useContext(ThemeContext)
    return (
        <div className={`font-lato ${themeColor === "light" ? "bg-secondary-light" : "bg-background-dark" }  text-text-light `}>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;