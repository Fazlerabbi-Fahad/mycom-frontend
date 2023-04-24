import React from 'react';
import { Animated } from "react-animated-css";
import { TbShoppingCart } from "react-icons/tb";
import { VscDebugRestart } from "react-icons/vsc";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";

const Benefits = () => {
    return (
        <Animated animationIn="slideInUp" animationInDuration="3000" isVisible={true}>
            <div className='max-w-screen-lg m-auto'>
                <div className='bg-white mt-12 py-3 px-3 shadow-xl rounded-md grid lg:grid-cols-4 md:grid-cols-1'>
                    <div className='py-5 ps-2'>
                        <div className="card card-side">
                            <figure><TbShoppingCart className='text-primary font-thin text-3xl mr-4'></TbShoppingCart></figure>
                            <div className="tracking-wide">
                                <h2 className="font-bold text-[12px] ">Free Shipping</h2>
                                <p className='font-thin text-[12px]'>When ordering over $100</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5 px-2'>
                        <div className="card card-side">
                            <figure><VscDebugRestart className='text-primary text-3xl mr-4'></VscDebugRestart></figure>
                            <div className="tracking-wide">
                                <h2 className="font-bold text-[12px] ">Free Return</h2>
                                <p className='font-thin text-[12px]'>Get Return within 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5 px-2'>
                        <div className="card card-side">
                            <figure><RiSecurePaymentLine className='text-primary text-3xl mr-4'></RiSecurePaymentLine></figure>
                            <div className="tracking-wide">
                                <h2 className="font-bold text-[12px] ">Secure Payment</h2>
                                <p className='font-thin text-[12px]'>100% Secure Online Payment</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5 px-2'>
                        <div className="card card-side">
                            <figure><AiOutlineTrophy className='text-primary text-3xl mr-4'></AiOutlineTrophy></figure>
                            <div className="tracking-wide">
                                <h2 className="font-bold text-[12px] ">Best Quality</h2>
                                <p className='font-thin text-[12px]'>Original Product Guarenteed</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Animated>
    );
};

export default Benefits;