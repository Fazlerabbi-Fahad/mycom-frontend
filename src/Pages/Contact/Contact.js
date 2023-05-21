import React from 'react';
import Header from "./../Shared/Header/Header";
import Subscription from "./../Home/Subscription/Subscription";

const Contact = () => {
    return (
        <div>
            <Header>Contact</Header>
            <div className='bg-[#f8f8f8]'>
                <div className='max-w-screen-lg m-auto'>
                    <div className='grid grid-cols-2'>
                        <div>
                            contact
                        </div>
                        <div>
                            <div className='h-[100%] w-[100%] bg-base-100 p-10'>
                                <h2 className='text-3xl font-bold text-center'>Get In Touch</h2>
                                <svg width="100%" height="30" viewBox="0 0 354 30" fill="none" xmlns='http://www.w3.org/2000/svg'>
                                    <path d="M1 28.8027c17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1" stroke='#FFBB38' stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                                <div className='mb-3'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>First Name*</p>
                                    <input type="text" placeholder="Demo Name" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='mb-3'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Email Address*</p>
                                    <input type="email" placeholder="info@quomodosoft.com" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='mb-3'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Email Address*</p>
                                    <input type="text" placeholder="Subject" className="input rounded-none input-bordered w-full mb-1" />
                                </div>
                                <div className='mb-3'>
                                    <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Subject*</p>
                                    <textarea type="text" placeholder="Type Your Message Here" className="input rounded-none input-bordered w-full mb-1 h-[100px] p-3" />
                                </div>
                                <button className="btn btn-secondary rounded-none w-full">Send Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscription></Subscription>
        </div>
    );
};

export default Contact;