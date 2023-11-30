import React, { useContext } from 'react';
import Feature from './Feature/Feature';
import { BsFillLightningFill } from "react-icons/bs";
import { MdLocalShipping, MdOutlineSecurity } from "react-icons/md";
import useUsers from '../../../hooks/useUsers';
import { AuthContext } from '../../../Providers/AuthProvider';
import useBooking from '../../../hooks/useBooking';
const OurFeature = () => {
    const [user] = useUsers();
  const [booking]=useBooking();
    return (
        <div className=' my-10  py-10'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>

                <Feature heading={'1. Super Fast'} description={"Why use a Courier Service if the item won’t arrive quickly? Our streamlined network ensures the fastest possible movement of documents and packages."} icon={<BsFillLightningFill />}> </Feature>
                <Feature heading={'2.  Parcel Safety'} description={"The SCS system of security checks and emergency back-ups is absolutely complete. Thanks to computerized administration and a staff that is second to none."} icon={<MdOutlineSecurity />}> </Feature>
                <Feature heading={'1.  Worldwide Shipping'} description={"Improving transit times, lowering shipping costs, and reducing tariff exposure has never been easier than with our global network of 3PL partners."} icon={<MdLocalShipping />}> </Feature>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                <div className="card  bg-sky-400 text-white">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-bold">{user?.length}</h2>
                        <p >Number of People Using our App</p>

                    </div>
                </div>
                <div className="card  bg-sky-600 text-white">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-bold">{booking?.length}</h2>
                        <p >Number of Parcel Booked</p>

                    </div>
                </div>
                <div className="card  bg-sky-800 text-white">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-bold">{user.length}</h2>
                        <p >Number of Parcel Delivered</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeature;