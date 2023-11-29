import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowLeft } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, LoadCanvasTemplateNoReload } from 'react-simple-captcha';
import swal from 'sweetalert';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../hooks/useAxiosPublic';
AOS.init({ duration: 1000 });

const LogIn = () => {
    const axiosPublic = useAxiosPublic();
    const { signIn, googleSignIn, user } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState();
    // const [user, setUser] = useState();
    const [disabled, setDisabled] = useState(true);
    // const [captchaText, setCaptchaText] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    console.log('state in the location login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    swal("Successfully logged in.");
                    navigate(from, { replace: true });
                    // navigate(location?.state ? location.state : '/');
                }
            })

            .catch((error) => {
                console.error(error);

                swal('Invalid email or password. Please try again.');
                form.reset('');
            });
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
            swal('Captcha Matched');
        }
        else {
            setDisabled(true);
            swal('Captcha Does Not Match');
        }
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                // setUser(loggedUser);
                const userInfo = {
                    email: loggedUser?.email,
                    name: loggedUser?.displayName,
                    photo:loggedUser?.photoURL
                }
                axiosPublic.post('/users', userInfo)

                    .then(res => {

                        console.log(res.data)

                        if (loggedUser) {
                            swal("Successfully logged in.");
                            navigate(from, { replace: true });
                            // navigate(location?.state ? location.state : '/');
                        }

                    })


            })
    };

    return (
        <>
            <Helmet>
                <title>parcel Tracker || login</title>
            </Helmet>
            <div>

                <NavLink className='mr-5 hover:text-red-500 flex items-center gap-2 ' to={'/'}> <FaArrowLeft /> Back to Home</NavLink>
                <div data-aos="zoom-in-up" className=" w-1/2 mx-auto  rounded-lg">
                    <div className=" ">
                        <div className="card w-full   shadow-2xl bg-base-100">
                            <div className='text-center p-3'>
                                <h1 className='text-3xl font-semibold'>Welcome back</h1>

                                <button onClick={handleGoogle} className='btn bg-slate-50 px-6 rounded-full my-3 normal-case text-base'><FcGoogle></FcGoogle> in with Google</button>
                                <p className=' '> -------------or------------ </p>
                            </div>
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className=' relative  '>
                                        <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered w-full" required />
                                        <span className=' absolute top-4 right-2' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    {/* TODO: apply disabled for re captcha */}
                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    Don’t have an account yet? please
                                    <Link to={"/register"}
                                        className="font-medium text-pink-500 transition-colors hover:text-blue-700"> Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default LogIn;