// import React from 'react';

// const BookParcel = () => {
//     return (
//         <div>
//             BookParcel
//         </div>
//     );
// };

// export default BookParcel;

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import './BookParcelForm.css';

const BookParcelForm = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
        phoneNumber: '',
        parcelType: '',
        parcelWeight: 0,
        receiverName: '',
        receiverPhoneNumber: '',
        deliveryAddress: '',
        requestedDeliveryDate: '',
        deliveryAddressLatitude: '',
        deliveryAddressLongitude: '',
        price: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleParcelWeightChange = (e) => {
        const parcelWeight = parseFloat(e.target.value);
        const price = calculatePrice(parcelWeight);
        setFormData((prevData) => ({ ...prevData, parcelWeight, price }));
    };

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
          
                <form onSubmit={handleSubmit}>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-[90%] mx-auto'>
                        <div>
                            <label>
                                Name
                                <input className=' rounded-md border-sky-400 border-2' type="text" name="name" value={formData.name} readOnly />
                            </label>

                            <label>
                                Email
                                <input className=' rounded-md border-sky-400 border-2' type="text" name="email" value={formData.email} readOnly />
                            </label>

                            <label>
                                Phone Number
                                <input
                                    className=' rounded-md border-sky-400 border-2'
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </label>


                            <label>
                                Parcel Weight
                                <input className=' rounded-md border-sky-400 border-2'
                                    type="number"
                                    name="parcelWeight"
                                    value={formData.parcelWeight}
                                    onChange={handleParcelWeightChange}
                                />
                            </label>
                            <label>
                                Parcel Type
                                <input className=' rounded-md border-sky-400 border-2'
                                    type="text"
                                    name="parcelType"
                                    value={formData.parcelType}
                                    onChange={handleParcelWeightChange}
                                />
                            </label>
                            <label>
                                Receiver's Name
                                <input className=' rounded-md border-sky-400 border-2'
                                    type="text"
                                    name="receiverName"
                                    value={formData.receiverName}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div>
                            <label>
                                Receiver's Phone Number
                                <input className=' rounded-md border-sky-400 border-2'
                                    type="text"
                                    name="receiverPhoneNumber"
                                    value={formData.receiverPhoneNumber}
                                    onChange={handleInputChange}
                                />
                            </label>

                            <label>
                                Parcel Delivery Address <br />
                                <textarea className=' rounded-md w-full border-sky-400 border-2'
                                    name="deliveryAddress"
                                    value={formData.deliveryAddress}
                                    onChange={handleInputChange}
                                ></textarea>
                            </label> <br />

                            <label>
                                Requested Delivery Date
                                <input className=' rounded-md border-sky-400 border-2'
                                    type="date"
                                    name="requestedDeliveryDate"
                                    value={formData.requestedDeliveryDate}
                                    onChange={handleInputChange}
                                />
                            </label>

                            <label>
                                Delivery Address Latitude
                                <input className=' rounded-md border-sky-400 border-2'
                                    type="text"
                                    name="deliveryAddressLatitude"
                                    value={formData.deliveryAddressLatitude}
                                    onChange={handleInputChange}
                                />
                            </label>

                            <label>
                                Delivery Address Longitude
                                <input className=' rounded-md border-sky-400 border-2'
                                    type="text"
                                    name="deliveryAddressLongitude"
                                    value={formData.deliveryAddressLongitude}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Price
                                <input className=' rounded-md border-sky-400 border-2' type="text" name="price" value={formData.price} readOnly />
                            </label>
                        </div>
                    </div>
                    <button className='rounded-md hover:bg-sky-500 w-1/3 mx-auto my-5 font-bold' type="submit">Book</button>
                </form>
           
        </div>
    );
};

export default BookParcelForm;
