import React from 'react';
import Header from "./../Shared/Header/Header";
import about from "../../Images/About/about.png";
import Button from '../Shared/Button/Button';
import Subscription from "../Home/Subscription/Subscription";
import Benefits from "../Home/Benefits/Benefits";
import Feedback from '../Shared/Feedback/Feedback';

const About = () => {
    return (
        <div>
            <Header>About Us</Header>
            <div className='bg-[#f8f8f8] '>
                <div className="hero min-h-screen max-w-screen-lg m-auto">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={about} alt='About Mycomm' className="lg:max-w-lg mt-5 lg:me-5 rounded-sm lg:h-[570px] lg:w-100" />
                        <div className=''>
                            <h1 className="font-medium lg:text-lg text-sm mb-2">What is e-commerce business?</h1>
                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                            <ul className="list-disc list-inside text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-5">
                                <li>slim body with metal cover</li>
                                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                            </ul>
                            <Button>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Feedback></Feedback>
            <div className='bg-[#f8f8f8] pb-10 pt-1'>
                <Benefits></Benefits>
            </div>

            <Subscription></Subscription>
        </div>
    );
};

export default About;