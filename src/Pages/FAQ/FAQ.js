import React from 'react';
import Header from "./../Shared/Header/Header";
import Subscription from "./../Home/Subscription/Subscription";

const FAQ = () => {
    return (
        <div>
            <Header>Frequently Asked Questions</Header>
            <div className='bg-[#f8f8f8]'>
                <div className='lg:max-w-screen-lg m-auto'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 py-10'>
                        <div className='my-5'>
                            <h3 className='text-xl font-bold mb-5'>Frequently asked questions</h3>
                            <ol className='list-decimal list-inside'>
                                <div className="collapse collapse-plus mb-7">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-base-100 peer-checked:bg-primary text-medium peer-checked:text-secondary-content">
                                        <li className='font-medium'> How does information technology work?</li>
                                    </div>

                                    <div className="collapse-content bg-primary peer-checked:bg-primary peer-checked:text-secondary-content">
                                        <hr className='w-full mb-5'></hr>
                                        <p className='text-justify text-sm'>There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus mb-7">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-base-100 peer-checked:bg-primary text-medium peer-checked:text-secondary-content">
                                        <li className='font-medium'> How can I become IT manager?</li>
                                    </div>

                                    <div className="collapse-content bg-primary peer-checked:bg-primary peer-checked:text-secondary-content">
                                        <hr className='w-full mb-5'></hr>
                                        <p className='text-justify text-sm'>There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus mb-7">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-base-100 peer-checked:bg-primary text-medium peer-checked:text-secondary-content">
                                        <li className='font-medium'> What are the latest trends in IT?</li>
                                    </div>

                                    <div className="collapse-content bg-primary peer-checked:bg-primary peer-checked:text-secondary-content">
                                        <hr className='w-full mb-5'></hr>
                                        <p className='text-justify text-sm'>There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus mb-7">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-base-100 peer-checked:bg-primary text-medium peer-checked:text-secondary-content">
                                        <li className='font-medium'> How long should a business plan be?</li>
                                    </div>

                                    <div className="collapse-content bg-primary peer-checked:bg-primary peer-checked:text-secondary-content">
                                        <hr className='w-full mb-5'></hr>
                                        <p className='text-justify text-sm'>There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus mb-7">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-base-100 peer-checked:bg-primary text-medium peer-checked:text-secondary-content">
                                        <li className='font-medium'> How work the support policy?</li>
                                    </div>

                                    <div className="collapse-content bg-primary peer-checked:bg-primary peer-checked:text-secondary-content">
                                        <hr className='w-full mb-5'></hr>
                                        <p className='text-justify text-sm'>There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words</p>
                                    </div>
                                </div>

                            </ol>
                        </div>
                        <div className='h-[100%] w-[100%] bg-base-100 p-10'>
                            <h2 className='text-3xl font-bold text-center'>Have Any Question</h2>
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
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Message*</p>
                                <textarea type="text" placeholder="Type Your Message Here" className="input rounded-none input-bordered w-full mb-1 h-[100px] p-3" />
                            </div>
                            <button className="btn btn-secondary rounded-none w-full">Send Now</button>

                        </div>
                    </div>
                </div>
            </div>
            <Subscription></Subscription>
        </div>
    );
};

export default FAQ;