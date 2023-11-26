import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')||location.pathname.includes('register');
    return (
        <div className=' max-w-7xl mx-auto'>
            {noHeaderFooter || <Navbar></Navbar>}

            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;