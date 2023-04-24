import React from 'react';
import { Animated } from "react-animated-css";
import { AiOutlineMail } from "react-icons/ai";

const Subscription = () => {
    return (
        <div className='bg-secondary w-full h-[307px] mt-20 lg:p-16 opacity-80'>
            <div className='max-w-screen-lg m-auto'>
                <div className="card-body  text-center lg:pt-5 pt-20">
                    <Animated animationIn="slideInUp" animationInDuration="3000" isVisible={true}>
                        <h2 className="font-bold lg:text-2xl sm:text-xl text-white">Get <span className='text-primary'>20%</span> Off Discount Coupon</h2>
                        <p className='font-thin lg:text-lg sm:text-xs text-white mb-6'>by Subscribe our Newsletter</p>
                    </Animated>
                    <Animated animationIn="slideInLeft" animationOut="slideInRight" animationInDuration="3000" isVisible={true}>
                        <ul className="menu menu-horizontal m-auto">

                            <li>
                                <button type="submit" class=" text-black bg-white text-xl " disabled><AiOutlineMail /></button>
                                <input type="text" placeholder='EMAIL ADDRESS' className="rounded-0 text-white w-[200px]" />
                                <button type="submit" class="btn btn-primary text-white text-xs lg:w-[150px] w-[80px] p-2">Get the Coupon</button>
                            </li>
                        </ul>
                    </Animated>
                </div>
            </div >
        </div >
    );
};

export default Subscription;