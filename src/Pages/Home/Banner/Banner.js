import React from 'react';
import Bangldesh from "../../../Images/Flag/Bangladesh.jpg";
import { FaGreaterThan } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1 lg:mt-9 w-full lg:h-[95vh] '>
            <div className='grid lg:col-span-2 lg:grid-rows-1 sm:w-[95%] h-[100%] bg-[#fecaca] sm:mx-auto'>
                <div className="card card-side">

                    <div className="m-auto">
                        <p>Bangladesh</p>
                        <h2 className="card-title">New album is released!</h2>
                        <div className="card-actions justify-start">
                            <button className="btn btn-ghost">Shop Now<FaGreaterThan className='text-xs ml-1' /></button>
                        </div>
                    </div><img src={Bangldesh} className='w-[50%] h-[60%] m-auto' alt="Album" />
                </div>
            </div>
            <div className='grid lg:grid-cols-1 grid-cols-2 sm:grid-cols-2 lg:grid-rows-2 lg:gap-5 md:gap-0 sm:w-[95%] sm:mx-auto'>
                <div className='grid lg:w-[95%] h-[100%] bg-[#6ee7b7] sm:mx-auto'>
                    <div className="card card-side">
                        <div className="m-auto">
                            <p>Bangladesh</p>
                            <h2 className="card-title">New album is released!</h2>
                            <div className="card-actions justify-start">
                                <button className="btn btn-ghost">Shop Now<FaGreaterThan className='text-xs ml-1' /></button>
                            </div>
                        </div><img src={Bangldesh} className='w-[50%] h-[60%] m-auto' alt="Album" />
                    </div>
                </div>
                <div className='grid lg:w-[95%] h-[100%] bg-[#f5d0fe] sm:mx-auto'>
                    <div className="card card-side">
                        <div className="m-auto">
                            <p>Bangladesh</p>
                            <h2 className="card-title">New album is released!</h2>
                            <div className="card-actions justify-start">
                                <button className="btn btn-ghost">Shop Now<FaGreaterThan className='text-xs ml-1' /></button>
                            </div>
                        </div><img src={Bangldesh} className='w-[50%] h-[60%] m-auto' alt="Album" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;