import React from 'react';
import Subscription from "./../Home/Subscription/Subscription";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Shopping from "./../../Images/Abstract/shopping.jpg";
import './login.css';

const Login = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='max-w-screen-lg m-auto'>
                    <div className="hero min-h-screen">
                        <div className="hero-content my-6 grid lg:grid-cols-2 shopping">
                            <div>
                                <img src={Shopping} className="shopping-img" alt="" />
                            </div>
                            <div className='w-[100%] bg-base-200 shadow-2xl p-10 lg:py-[100px] py-10'>
                                <h2 className='text-3xl font-bold text-center'>Log In</h2>
                                <svg width="100%" height="30" viewBox="0 0 354 30" fill="none" xmlns='http://www.w3.org/2000/svg'>
                                    <path d="M1 28.8027c17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1" stroke='#FFBB38' stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                                <div className='mb-3'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Email Address*</p>
                                    <input type="email" placeholder="example@quomodosoft.com" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='mb-2'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Password*</p>
                                    <input type="password" placeholder="password" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='flex justify-between'>
                                    <label>
                                        <input type="checkbox" className="checkbox checkbox-xs me-2" />
                                        <span className="label-text lg:text-sm text-xs">Remember me</span>

                                    </label>
                                    <label className="label mb-2">
                                        <Link className="lg:text-sm text-xs text-primary">Forgot password</Link>
                                    </label>
                                </div>

                                <button className="btn btn-secondary rounded-none w-full mb-5">Login</button>
                                <button className="btn btn-outline text-[#64748b] border-[#64748b] rounded-none w-full mb-2"><FcGoogle className='me-2'></FcGoogle>Sign in with Google</button>
                                <p className='text-center tracking-wide leading-7 lg:text-md text-sm mb-1'><span className='text-[#64748b] font-normal me-2'>Dont’t have an account ?</span><Link to='/register'>Sign up free</Link></p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Subscription></Subscription>
        </div>
    );
};

export default Login;