

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
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product photo</label>
                            <input type="url" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" https://example.com" required />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                            <div className=' relative'>
                                <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                <span className=' absolute top-3 right-2' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center gap-3 h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" name='terms' className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                    <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">  I agree the Terms and Conditions</label>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='flex-1'>
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product photo</label>
                            <input type="url" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" https://example.com" required />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                            <div className=' relative'>
                                <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                <span className=' absolute top-3 right-2' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center gap-3 h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" name='terms' className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                    <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">  I agree the Terms and Conditions</label>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <button type="submit" className="w-1/2 f text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600">Book a Parcel</button>

            </form>


        </div>
    );
};

export default BookParcelForm;
