import React, { useContext } from 'react';
import useBooking from '../../../hooks/useBooking';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const UserParcel = () => {
    const { user } = useContext(AuthContext);
    const [booking] = useBooking();
    const userEmail = user?.email;
    const filteredData = booking.filter(item => item.email === userEmail);
    
    return (
        <div>
            <div className="overflow-x-auto">

                {filteredData.length > 0 ? <>
                    <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parcel Type</th>
                            <th> Requested Delivery Date</th>
                            <th>Approximate Delivery Date</th>
                            <th>Booking Date</th>
                            <th>Delivery Men ID</th>
                            <th>Booking Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.parcelType}</td>
                                <td>{item.date}</td>
                                <td>{item.date}</td>
                                <td>{item.date}</td>
                                <td>{item._id}</td>
                                <td></td>


                                <td>
                                    {item.role === 'admin' ? 'Admin' : <button
                                        // onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}

                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                
                </>
                
                :
                
                <>
                
                <div className=' lg:text-5xl pt-10  mt-10 font-extrabold items-center font-sans text-sky-700 text-center  '>You did not booked any parcel </div>
                </>

                }
                
            </div>
        </div>
    );
};

export default UserParcel;