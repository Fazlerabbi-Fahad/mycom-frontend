import React from 'react';
import Header from "./../Shared/Header/Header";
import Subscription from "./../Home/Subscription/Subscription";
import Button from "./../Shared/Button/Button";
import { FaShippingFast } from "react-icons/fa";


const TrackOrder = () => {
    return (
        <div className='bg-[#f8f8f8]'>
            <Header>Track Order</Header>
            <div className='max-w-screen-lg m-auto'>
                <h2 className='font-semibold lg:text-2xl text-xl mt-10'>Track Your Order</h2>
                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Enter your order taracking number and your secreet id.</p>
                <div>
                    <div className="card card-side bg-base-100 rounded-none mt-5 mb-10 grid lg:grid-cols-3 grid-cols-1">
                        <div className="card-body col-span-2">
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Order Tracking Number*</p>
                                <input type="text" placeholder="Order Number" className="input rounded-none input-bordered w-full mb-1" />
                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm mb-1'>Delivery Date</p>
                                <input type="date" placeholder="23/09/23" className="input rounded-none input-bordered w-full" />
                            </div>
                            <div className="card-actions justify-start mt-5">
                                <Button>Track Now</Button>
                            </div>
                        </div>
                        <figure><FaShippingFast className='text-[#64748b] w-[200px]'></FaShippingFast></figure>

                    </div>
                </div>
            </div>

            <Subscription></Subscription>
        </div>
    );
};

export default TrackOrder;