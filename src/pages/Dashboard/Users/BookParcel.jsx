import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const BookParcelForm = () => {
    const {user}=useContext(AuthContext);
    // const axiosPublic = useAxiosPublic();
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const phone = form.phone.value;
        const receiverPhone = form.receiverPhone.value;
        const receiverName = form.receiverName.value;
        const Latitude = form.Latitude.value;
        const Longitude = form.Longitude.value;
        const deliveryAddress = form.deliveryAddress.value;
        const parcelType = form.parcelType.value;
        const price = form.price.value;
        const parcelWeight = form.parcelWeight.value
        const email = user?.email;
        const date = form.date.value;
        const bookingItem = {
            userName: userName,
            email,
            phone,
            parcelType,
            parcelWeight,
            receiverName,
            receiverPhone,
            deliveryAddress,
            date,
            Latitude,
            Longitude,
            price: price,
        };
        console.log(bookingItem);
        fetch(`https://parcel-tracker-server.vercel.app/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "  successfully booked!",
                        icon: "success",
                        button: "Aww yiss!",

                    });
                    form.reset();
                };
            });    

    }
    return (
        <div className="book-parcel-form ml-10 ">
            <h2 className='text-3xl'>Book a Parcel</h2>

            <form onSubmit={handleBooking} className="space-y-6 " >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white"> Nice to meet you! Enter your details to Book a Parcel.</h3>
                <div className='flex lg:flex-row md:flex-col gap-10 flex-col '>
                    <div className='flex-1'>

                        <div className="w-full">
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user Name</label>
                            <input type="text" name="userName" defaultValue={user?.displayName} id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="userName" required readOnly />
                        </div>



                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a phone number:</label>
                            <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123-45-678" pattern="[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{3}" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="buyerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parcel Type</label>
                            <input type="text" name="parcelType" id="parcelType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="parcelType" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="parcelWeight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parcel Weight</label>
                            <input type="number" name="parcelWeight" id="parcelWeight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="parcelWeight" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="receiverName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receiver's Name</label>
                            <input type="text" name="receiverName" id="receiverName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="parcelWeight" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="receiverPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receiver's Phone Number:</label>
                            <input type="tel" name="receiverPhone" id="receiverPhone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12345678" pattern="[0-9]{3}[0-9]{2}[0-9]{3}"  required />
                        </div>

                    </div>
                    <div className='flex-1'>
                        <div className="w-full">
                            <label htmlFor="userEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User email</label>
                            <input type="email" name="Email" defaultValue={user?.email} id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="userEmail" required readOnly />
                        </div>
                        <div>
                            <label htmlFor="deliveryAddress" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Parcel Delivery Address</label>
                            <input type="text" name="deliveryAddress" id="deliveryAddress" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="deliveryAddress" required />
                        </div>
                        <div>
                            <label htmlFor="date" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Requested Delivery Date</label>
                            <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="date" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="Latitude" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery Address Latitude</label>
                            <input type="text" name="Latitude" id="Latitude" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Delivery Address Latitude" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Latitude" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery Address Longitude</label>
                            <input type="text" name="Longitude" id="Longitude" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Delivery Address Longitude" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" readOnly required />
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button type="submit" className="w-1/2 f text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600">Book a Parcel</button>
                </div>
            </form>


        </div>
    );
};

export default BookParcelForm;
