import React, { useContext } from 'react';
import useUsers from '../../../hooks/useUsers';
import { AuthContext } from '../../../Providers/AuthProvider';
import useBooking from '../../../hooks/useBooking';

const AdminHome = () => {
    const [user] = useUsers();
    const [booking] = useBooking();
    console.log(booking);
    return (
        <div>
            
            <h1 className='text-4xl font-extrabold text-center my-10'> Dashboard</h1>
            <div className=' w-[95%] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-10'>
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

export default AdminHome;