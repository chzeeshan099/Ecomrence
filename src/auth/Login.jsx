import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useMsal } from '@azure/msal-react';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import logo from '../imgs/Logo.svg';
import arrow from '../imgs/arrow.svg';
import iphone from '../imgs/tab.svg';
import { FaGoogle } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
// import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
    const [forget, setForget] = useState(false);
    const [openEye, setOpenEye] = useState(false);
    const navigate = useNavigate();
    const { instance } = useMsal();
    
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            localStorage.setItem('token', tokenResponse.access_token);
            navigate('/home');
        },
        onError: () => {
            console.log('Login Failed');
        },
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (forget) {
            setForget(false);
        } else {
            navigate('/home');
        }
    };

    const showPassword = () => {
        setOpenEye(!openEye);
    };

    const password = watch('password');

    const handleMicrosoftLogin = () => {
        instance.loginPopup().then(response => {
            console.log(response);
            // Handle successful login here
            navigate('/home');
        }).catch(error => {
            console.error(error);
        });
    };

    // Facebook login logic removed

    // Facebook SDK logic removed

    return (
        <>
            <div className='w-100 loginDiv d-flex align-items-center justify-contet-between'>
                <div className='loginDataMainDiv'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='pt-5 p-4 loginDataDiv'>
                            <img src={logo} alt="Logo" />
                            <h6 className='mt-3'>Welcome Back !!!</h6>
                            <h1>{forget ? 'Forget Password' : 'Sign in'}</h1>
                            <p className='m-0'>Email</p>
                            <input
                                className='p-2 w-100'
                                type="email"
                                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                            />
                            {errors.email && <p className='text-danger warning'>{errors.email.message}</p>}
                            
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <p className='m-0'>Password</p>
                                {
                                    !forget && <p className='m-0 forget' onClick={() => setForget(true)}>Forgot Password ?</p>
                                }
                            </div>
                            <div className='w-100 d-flex align-items-center justify-content-center passwordDiv'>
                                <input
                                    className='p-2 w-100 border-0'
                                    type={openEye ? 'text' : 'password'}
                                    {...register('password', { 
                                        required: 'Password is required', 
                                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: 'Mix of letters, numbers, and special characters'
                                        }
                                    })}
                                />
                                <p className='m-auto pe-2 eye fs-5' onClick={showPassword}>
                                    {openEye ? <IoMdEyeOff /> : <IoEye />}
                                </p>
                            </div>
                            {errors.password && <p className='text-danger warning'>{errors.password.message}</p>}
                            
                            {
                                forget && <div>
                                    <p className='m-0 mt-2'>Confirm Password</p>
                                    <div className='w-100 d-flex align-items-center justify-content-center passwordDiv'>
                                        <input
                                            className='p-2 w-100 border-0'
                                            type={openEye ? 'text' : 'password'}
                                            {...register('confirmPassword', { 
                                                required: 'Confirm Password is required',
                                                validate: value => value === password || 'Passwords do not match'
                                            })}
                                        />
                                        <p className='m-auto pe-2 eye fs-5' onClick={showPassword}>
                                            {openEye ? <IoMdEyeOff /> : <IoEye />}
                                        </p>
                                    </div>
                                    {errors.confirmPassword && <p className='text-danger warning'>{errors.confirmPassword.message}</p>}
                                </div>
                            }
                            
                            <div className='d-flex flex-column align-items-center justify-content-center my-4'>
                                <button type='submit' className='loginBtn mb-2 d-flex align-items-center justify-content-around'>
                                    SIGN IN <img src={arrow} alt="Arrow" />
                                </button>
                                {
                                    !forget && <>
                                    <div>
                                        <p className='m-0'>Continue with Social Accounts</p>
                                        <div className='d-flex align-items-center justify-content-around'>
                                            <p className='loginIcon' onClick={() => login()}><FaGoogle /></p>
                                            <p className='loginIcon' onClick={handleMicrosoftLogin}><TfiMicrosoftAlt  /></p>
                                            {/* Facebook login removed */}
                                            <p className='loginIcon facebook' ><FaLinkedin /></p>
                                        </div>
                                    </div>
                                    </>
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className='d-none d-lg-block iphoneDiv'>
                    <img src={iphone} className=' border' alt="iPhone" />
                </div>
            </div>
        </>
    );
};

export default Login;