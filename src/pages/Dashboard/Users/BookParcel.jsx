

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import './BookParcelForm.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const BookParcelForm = () => {
    const { user } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState();
    // const [formData, setFormData] = useState({
    //     name: user?.displayName || '',
    //     email: user?.email || '',
    //     phoneNumber: '',
    //     parcelType: '',
    //     parcelWeight: 0,
    //     receiverName: '',
    //     receiverPhoneNumber: '',
    //     deliveryAddress: '',
    //     requestedDeliveryDate: '',
    //     deliveryAddressLatitude: '',
    //     deliveryAddressLongitude: '',
    //     price: 0,
    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({ ...prevData, [name]: value }));
    // };

    // const handleParcelWeightChange = (e) => {
    //     const parcelWeight = parseFloat(e.target.value);
    //     const price = calculatePrice(parcelWeight);
    //     setFormData((prevData) => ({ ...prevData, parcelWeight, price }));
    // };

    const calculatePrice = (parcelWeight) => {
        if (parcelWeight === 1) {
            return 50;
        } else if (parcelWeight === 2) {
            return 100;
        } else {
            return 150;
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here (e.g., send data to server)
    //     console.log('Form data submitted:', formData);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, photo, password, accepted);


        // try {
        //   // Assuming you have an API endpoint for parcel booking
        //   const response = await fetch('your-api-endpoint', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });

        //   if (response.ok) {
        //     // Handle successful form submission (e.g., show a success message)
        //     console.log('Form submitted successfully');
        //   } else {
        //     // Handle error response from the server
        //     console.error('Form submission failed');
        //   }
        // } catch (error) {
        //   // Handle any network or other errors
        //   console.error('Error submitting form:', error);
        // }
        console.log('Form data submitted:', formData);
    };


    return (
        <div className="book-parcel-form ml-10 ">
            <h2 className='text-3xl'>Book a Parcel</h2>

            <form onSubmit={handleSubmit} className="space-y-6 " >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white"> Nice to meet you! Enter your details to Book a Parcel.</h3>
                <div className='flex lg:flex-row md:flex-col gap-10 flex-col '>
                    <div className='flex-1'>

                        <div className="w-full">
                            <label htmlFor="buyerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyer Name</label>
                            <input type="text" name="buyerName" defaultValue={user?.displayName} id="buyerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="buyerName" required readOnly />
                        </div>



                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a phone number:</label>
                            <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
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
                            <input type="tel" name="receiverPhone" id="receiverPhone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>

                    </div>
                    <div className='flex-1'>
                        <div className="w-full">
                            <label htmlFor="buyerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyer email</label>
                            <input type="email" name="Email" defaultValue={user?.email} id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="buyerEmail" required readOnly />
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
