import React, { useState, useEffect } from 'react';
// import { getParcels, updateParcelStatus, cancelParcelBooking } from 'path-to-your-api'; // Replace with your API functions
import ParcelFilter from './ParcelFilter'; 

const UserParcel = () => {
    const [parcels, setParcels] = useState([]);
    const [filteredParcels, setFilteredParcels] = useState([]);
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        // Fetch user's parcels from the API
        const fetchParcels = async () => {
            const userParcels = await getParcels(); // Implement getParcels API function
            setParcels(userParcels);
            setFilteredParcels(userParcels);
        };

        fetchParcels();
    }, []);

    const handleFilterChange = (status) => {
        setFilterStatus(status);
        if (status === 'all') {
            setFilteredParcels(parcels);
        } else {
            const filtered = parcels.filter((parcel) => parcel.bookingStatus === status);
            setFilteredParcels(filtered);
        }
    };

    const handleUpdateParcel = (parcelId) => {
        // Redirect user to update booking page
        // Implement your navigation logic
        console.log(`Redirect to update booking page for parcel ${parcelId}`);
    };

    const handleCancelParcel = async (parcelId) => {
        // Confirm cancellation with the user
        const confirmCancel = window.confirm('Are you sure you want to cancel this parcel booking?');

        if (confirmCancel) {
            // Update parcel status to 'cancelled'
            await cancelParcelBooking(parcelId); // Implement cancelParcelBooking API function
            const updatedParcels = parcels.map((parcel) =>
                parcel.id === parcelId ? { ...parcel, bookingStatus: 'cancelled' } : parcel
            );
            setParcels(updatedParcels);
            setFilteredParcels(updatedParcels);
        }
    };

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className="text-2xl font-semibold mb-4">My Parcels</h2>

            {/* Parcel filter component */}

            <ParcelFilter filterStatus={filterStatus} onFilterChange={handleFilterChange} />

            {/* Parcel table */}
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Parcel Type</th>
                        <th className="py-2 px-4 border-b">Requested Delivery Date</th>
                        <th className="py-2 px-4 border-b">Approximate Delivery Date</th>
                        <th className="py-2 px-4 border-b">Booking Date</th>
                        <th className="py-2 px-4 border-b">Delivery Men ID</th>
                        <th className="py-2 px-4 border-b">Booking Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredParcels.map((parcel) => (
                        <tr key={parcel.id}>
                            <td className="py-2 px-4 border-b">{parcel.parcelType}</td>
                            <td className="py-2 px-4 border-b">{parcel.requestedDeliveryDate}</td>
                            <td className="py-2 px-4 border-b">{parcel.approximateDeliveryDate}</td>
                            <td className="py-2 px-4 border-b">{parcel.bookingDate}</td>
                            <td className="py-2 px-4 border-b">{parcel.deliveryMenId}</td>
                            <td className="py-2 px-4 border-b">{parcel.bookingStatus}</td>
                            <td className="py-2 px-4 border-b space-x-2">
                                {parcel.bookingStatus === 'pending' && (
                                    <>
                                        <button
                                            className="text-blue-500 hover:underline"
                                            onClick={() => handleUpdateParcel(parcel.id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="text-red-500 hover:underline"
                                            onClick={() => handleCancelParcel(parcel.id)}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                )}
                                {parcel.bookingStatus === 'delivered' && (
                                    <button className="text-green-500 hover:underline">Review</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserParcel;




