import React from 'react';
import Subscription from "./../Home/Subscription/Subscription";
import Header from "./../Shared/Header/Header";
import { Link } from 'react-router-dom';
import './BecomeSeller.css';

const BecomeSeller = () => {
    return (
        <div>
            <Header>Seller Application</Header>
            <div className='bg-[#f8f8f8]'>
                <div className='max-w-screen-lg m-auto py-10'>
                    <div className='bg-base-200 shadow-2xl grid lg:grid-cols-4'>

                        <div>
                            <div className='w-[100%]  p-10 pb-0'>
                                <h3 className='text-xl font-semibold mb-1'>Update Profile</h3>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-3'>Update your picture</p>
                                <label class="custom-file-upload">
                                    <input type="file" />
                                </label>
                            </div>
                            <div className='w-[100%]  p-10 pb-0'>
                                <h3 className='text-xl font-semibold mb-1'>Update Logo</h3>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-3'>Update shop logo</p>
                                <label class="custom-logo-upload">
                                    <input type="file" />
                                </label>
                            </div>
                            <div className='w-[100%]  p-10'>
                                <h3 className='text-xl font-semibold mb-1'>Update Cover</h3>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-3'>Update shop cover</p>
                                <label class="custom-cover-upload">
                                    <input type="file" />
                                </label>
                            </div>


                        </div>


                        <div className='grid col-span-3'>
                            <div className='w-[100%]  p-10'>
                                <h3 className='text-xl font-semibold mb-1'>Seller Information</h3>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-3'>Fill the form below or write us .We will help you as soon as possible.</p>

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
                                <div className='mb-1'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Country*</p>
                                    <select className="select select-bordered w-full text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1">
                                        <option selected>Bangladesh</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                    </select>
                                </div>
                                <div className='mb-5'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Address*</p>
                                    <input type="text" placeholder="Your Address Here" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <h3 className='text-xl font-semibold mb-1'>Shop Information</h3>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-3'>Fill the form below or write us .We will help you as soon as possible.</p>
                                <div className='mb-2'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Shop Name*</p>
                                    <input type="text" placeholder="Shop Name" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='mb-2'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Address*</p>
                                    <input type="text" placeholder="Your Address Here" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='mb-2 grid lg:grid-cols-2 gap-4'>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Password*</p>
                                        <input type="password" placeholder="password" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                    <div>
                                        <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Re-enter Password*</p>
                                        <input type="password" placeholder="Re-enter password" className="input rounded-none input-bordered w-full mb-1" />
                                    </div>
                                </div>

                                <button className="btn rounded-none w-full m-auto mb-2">Create Seller Account
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

export default BecomeSeller;