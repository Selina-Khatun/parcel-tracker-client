import React from 'react';
import Feature from './Feature/Feature';
import { BsFillLightningFill } from "react-icons/bs";
import { MdLocalShipping, MdOutlineSecurity } from "react-icons/md";
const OurFeature = () => {
    // const FeaturesSection = ({ parcelBooked, parcelDelivered, usersCount }) => {
    //     return (
    return (
        <div className=' my-10  py-10'>
          <div className='grid grid-cols-3 gap-10'>

          <Feature heading={'1. Super Fast'} description={"Why use a Courier Service if the item won’t arrive quickly? Our streamlined network ensures the fastest possible movement of documents and packages."}  icon={<BsFillLightningFill />}> </Feature>
           <Feature heading={'2.  Parcel Safety'} description={"The SCS system of security checks and emergency back-ups is absolutely complete. Thanks to computerized administration and a staff that is second to none."}  icon={<MdOutlineSecurity />}> </Feature>
           <Feature heading={'1.  Worldwide Shipping'} description={"Improving transit times, lowering shipping costs, and reducing tariff exposure has never been easier than with our global network of 3PL partners."}  icon={<MdLocalShipping />}> </Feature>
          </div>
          {/* TODO: <div className="stat-cards">
                <StatCard value={parcelBooked} label="Number of Parcel Booked" />
                <StatCard value={parcelDelivered} label="Number of Parcel Delivered" />
                <StatCard value={usersCount} label="Number of People Using Your App" />
            </div> */}
        </div>
    );
};

export default OurFeature;