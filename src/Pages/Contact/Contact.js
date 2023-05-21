import React from 'react';
import Header from "./../Shared/Header/Header";
import Subscription from "./../Home/Subscription/Subscription";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header>Contact</Header>
            <div className='bg-[#f8f8f8]'>
                <div className='max-w-screen-lg m-auto py-10'>
                    <div className='grid grid-cols-2 gap-4 contact'>
                        <div className='lg:last:me-5 mx-2 fixed-contact'>
                            <div>
                                <h3 className='text-xl font-semibold mb-1'>Contact Information</h3>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-5'>Fill the form below or write us .We will help you as soon as possible.</p>
                                <div>
                                    <div className='grid lg:grid-cols-2 gap-5 mb-5'>
                                        <article className="text-center w-full h-[160px] p-4 bg-[#ffeae5]">
                                            <FiPhoneCall className='contact-option-icon text-secondary  m-auto w-8 h-8 p-1 mb-1'></FiPhoneCall>
                                            <h4 className='text-xl font-semibold mb-1'>Phone</h4>
                                            <h5 className='mb-1'>+(323) 9847 3847 383</h5>
                                            <h5>+(434) 5466 5467 443</h5>

                                        </article>
                                        <article className="text-center w-full h-[160px] p-4 bg-[#d3efff]">
                                            <MdOutlineEmail className='contact-option-icon  text-secondary w-8 h-8 p-1 m-auto mb-1'></MdOutlineEmail>
                                            <h4 className='text-xl font-semibold mb-1'>Email</h4>
                                            <h5 className='mb-1 text-sm justify-center'>Demoemail@gmail.com</h5>
                                            <h5 className='text-xs'>rafiqulislamsuvobd@gmail.com</h5>
                                        </article>

                                    </div>
                                    <article className="contact-option h-[390px] p-5 bg-[#e7f2ec]">
                                        <div className='flex mb-5'>
                                            <div className=" me-3">
                                                <BiMap className='contact-option-icon text-secondary m-auto w-8 h-8 p-1 mb-1'></BiMap>
                                            </div>
                                            <div>
                                                <h4 className='text-lg font-semibold mb-1'>Address</h4>
                                                <h5 className='mb-1 text-sm'>Block A, Bashundhara, Dhaka, Bangladesh</h5>
                                            </div>
                                        </div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.46925538854!2d90.42294278581325!3d23.810254380238767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b4cb48a957%3A0x58431526fc0e2ccf!2sBlock%20A%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1684672272373!5m2!1sen!2sbd" width="100%" height="80%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

                                    </article>
                                </div>
                            </div>
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