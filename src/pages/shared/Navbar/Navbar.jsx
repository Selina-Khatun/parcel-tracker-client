import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../../Providers/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const location = useLocation();
    const handleLogout = () => {
        console.log("Logging out...");
        logOut()
            .then(() => {
                console.log("Logged out successfully.");
            })
            .catch(error => {
                console.error("Log out error:", error);
            });
    }
    const navLinks = <>
        {/* <li><NavLink className='mr-5 font-bold uppercase' to={'/'}>Home</NavLink></li> */}
        <li className={`nav-item ${location.pathname === '/' && 'bg-sky-100 rounded-xl mr-5'}`}><Link to={'/'}><button class="relative inline-block  text-lg group w-full my-2">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-sky-500 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-sky-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-500 group-hover:-rotate-180 ease"></span>
                <span class="relative">Home</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-sky-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </button></Link></li>
        <li className={`nav-item ${location.pathname === '/dashboard' && 'bg-sky-100 rounded-xl mr-5'}`}><Link to={'/dashboard'}><button class="relative  text-lg group w-full my-2">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-sky-500 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-sky-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-500 group-hover:-rotate-180 ease"></span>
                <span class="relative">Dashboard</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-sky-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </button></Link></li>
        <li className={`nav-item ${location.pathname === '/register' && 'bg-sky-100 rounded-xl mr-5'}`}><Link to={'/register'}><button class="relative inline-block text-lg group w-full my-2">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-sky-500 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-sky-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-500 group-hover:-rotate-180 ease"></span>
                <span class="relative">Register</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-sky-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </button></Link></li>
    </>
    return (
        <div>

            <div className="navbar  lg:fixed md:fixed  lg:w-11/12 mx-auto   bg-white z-10 ">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]   bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <img src="https://i.ibb.co/GWnrjvN/running-man-delivery-logo-isolated-white-126523-916.jpg" className="w-24 me-3 rounded-full" alt="FlowBite Logo" />
                            <span className="self-center lg:text-2xl -ml-10 font-semibold font-kaushan-script whitespace-nowrap text-[#01c8ff] dark:text-white">Parcel Tracker</span>
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end lg:-ml-28 -ml-10">

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        {user ? (
                            <div className=' flex justify-center flex-wrap-reverse lg:mt-0 mt-10 items-center gap-3'>
                                <div className='flex flex-col flex-wrap'>

                                    <p className=' text-rose-600 lg:font-bold text-xs'>{user?.email} </p>
                                </div>

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle border border-sky-500 avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="name" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul className="lg:mt-[90%] z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <p className=' text-rose-600 lg:font-bold'>{user?.displayName} </p>
                                    </li>

                                    <NavLink to={'/dashboard'}><button class="relative inline-block text-lg group w-full my-2">
                                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-sky-500 rounded-lg group-hover:text-white">
                                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-sky-50"></span>
                                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-500 group-hover:-rotate-180 ease"></span>
                                            <span class="relative">Dashboard</span>
                                        </span>
                                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-sky-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                    </button></NavLink>
                                    <button onClick={handleLogout} class="relative inline-flex items-center uppercase  justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-sky-500 rounded-xl group">
                                        <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-sky-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                        </span>
                                        <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-sky-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                        <span class="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white text-center">log out</span>
                                    </button>
                                </ul>
                            </div>
                        ) : (
                            <button className='btn btn-outline btn-error lg:text-white text-black'><NavLink to={'/login'}>Login</NavLink></button>

                        )}

                    </div>
                </div>

            </div>
        </div>


    );
};

export default Navbar;