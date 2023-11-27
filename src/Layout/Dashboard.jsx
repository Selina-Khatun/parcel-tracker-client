import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
const Dashboard = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-sky-100">
                <ul className="menu p-4">
                    <li>
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <img src="https://i.ibb.co/GWnrjvN/running-man-delivery-logo-isolated-white-126523-916.jpg" className="w-24 me-3 rounded-full" alt="FlowBite Logo" />
                            <span className="self-center lg:text-2xl -ml-10 font-semibold font-kaushan-script whitespace-nowrap text-[#01c8ff] dark:text-white">Parcel Tracker</span>
                        </a>
                    </div>
                    </li>
                    <li>
                        <Link to="/">
                            <IoHome />
                            Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/bookParcel">
                            <IoHome />
                            Book a Parcel</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/userParcel">
                            <IoHome />
                            My Parcels</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile">
                        <ImProfile />
                            My Profile </Link>
                    </li>
                </ul>
            </div>
            <div>
           
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;