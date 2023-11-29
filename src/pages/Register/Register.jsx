// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import auth from '../../firebase/firebase.config';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
AOS.init({ duration: 1000 });
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        // console.log('form submit')
        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, photo, password, accepted);
        if (!emailRegex.test(email)) {
            swal('Invalid email format. Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            swal('Password should be at least 6 characters or more.');
            return;
        } else if (!/[A-Z]/.test(password)) {
            swal('Password must contain at least one capital letter.');
            return;
        } else if (!/[@#$%^&+=]/.test(password)) {
            swal('Password must contain at least one special character (@, #, $, %, ^, &, +, or =).');
            return;
        } else if (!accepted) {
            swal('Please accept our term and conditions!!!!')
        } else {

            createUser(email, password)

                .catch(error => {
                    console.log('Registration error:', error);
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('Email-already-in-use condition met.');
                        swal('Email-already-in-use');
                        form.reset('')
                    } else {
                        console.log('Other error condition met.');
                        swal('An error occurred while creating the user.');
                       
                    }
                })
               
                .then(result => {
                    console.log(result.user);


                    updateUserProfile(name, photo)
                        .then(() => {
                            const userInfo = {
                                name: name,
                                email: email,
                                photo: photo
                            };
                            console.log(userInfo);
                            axiosPublic.post('/users', userInfo)

                                .then(res => {
                                    if (res.data.insertedId) {
                                        // console.log('user added to the database')
                                        form.reset('');
                                        swal('User created successfully.');
                                        navigate('/');
                                    }
                                })
                        })
                });
        }
    }
    return (
        <>
            <Helmet>
                <title>Parcel Tracker || Register</title>
            </Helmet>

            <div>
                <NavLink className='mr-5 hover:text-red-500 flex items-center gap-2 ' to={'/'}> <FaArrowLeft /> Back to Home</NavLink>
                <div data-aos="zoom-in-up" className="hero min-h-screen" >
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="bg-white shadow-md border border-gray-200 rounded-lg md:max-w-3xl max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form onSubmit={handleRegister} className="space-y-6" >
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white"> Nice to meet you! Enter your details to register.</h3>
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
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

                            </form>

                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <Link to={"/login"}
                                    className="font-medium text-pink-500 transition-colors hover:text-blue-700"

                                >
                                    LogIn
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Register;