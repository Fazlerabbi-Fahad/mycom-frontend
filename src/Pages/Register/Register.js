import React from 'react';
import shopping2 from "./../../Images/Abstract/shopping2.jpg";
import { Link } from 'react-router-dom';
import Subscription from "./../Home/Subscription/Subscription";

const Register = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='max-w-screen-lg m-auto'>
                    <div className="hero min-h-screen">
                        <div className="hero-content my-6 grid lg:grid-cols-2 shopping">
                            <div>
                                <img src={shopping2} className="shopping-img" alt="" />
                            </div>
                            <div className='w-[100%] bg-base-200 shadow-2xl p-10 lg:py-[100px] py-10'>
                                <h2 className='text-3xl font-bold text-center'>Create Account</h2>
                                <svg width="100%" height="30" viewBox="0 0 354 30" fill="none" xmlns='http://www.w3.org/2000/svg'>
                                    <path d="M1 28.8027c17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1" stroke='#FFBB38' stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                                <div className='mb-3 grid lg:grid-cols-2 gap-4'>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>First Name*</p>
                                        <input type="text" placeholder="First Name" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Last Name*</p>
                                        <input type="text" placeholder="Last Name" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                </div>
                                <div className='mb-3 grid lg:grid-cols-2 gap-4'>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Email Address*</p>
                                        <input type="email" placeholder="example@quomodosoft.com" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Phone*</p>
                                        <input type="text" placeholder="019********" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Address*</p>
                                    <input type="text" placeholder="Your Address Here" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='mb-2 '>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Password*</p>
                                        <input type="password" placeholder="password" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Confirm Password*</p>
                                        <input type="password" placeholder="Confirm password" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label>
                                        <input type="checkbox" className="checkbox checkbox-xs me-2" />
                                        <span className="label-text lg:text-sm text-xs">I agree all Terms and Condition in MyComm.</span>

                                    </label>
                                </div>

                                <button className="btn btn-secondary rounded-none w-full mb-5">Create Account
                                </button>
                                <p className='text-center tracking-wide leading-7 lg:text-md text-sm mb-1'><span className='text-[#64748b] font-normal me-2'>Already have an Account?</span><Link to='/login'>Log In</Link></p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Subscription></Subscription>
        </div>
    );
};

export default Register;