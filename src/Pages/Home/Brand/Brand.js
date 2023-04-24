import React from 'react';
import { Animated } from "react-animated-css";
import brand1 from "../../../Images/Brand/brand1.png";
import brand2 from "../../../Images/Brand/brand2.png";
import brand3 from "../../../Images/Brand/brand3.png";
import brand4 from "../../../Images/Brand/brand4.png";
import brand5 from "../../../Images/Brand/brand5.png";
import brand6 from "../../../Images/Brand/brand6.png";
import brand7 from "../../../Images/Brand/brand7.png";
import brand8 from "../../../Images/Brand/brand8.png";
import brand9 from "../../../Images/Brand/brand9.png";
import brand10 from "../../../Images/Brand/brand10.png";
import brand11 from "../../../Images/Brand/brand11.png";
import brand12 from "../../../Images/Brand/brand12.png";

const Brand = () => {
    return (
        <Animated animationIn="slideInUp" animationInDuration="3000" isVisible={true}>
            <div className='bg-white mt-9 shadow-xl rounded-md grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2'>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand1} alt="Oneplus" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand2} alt="Tencent" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand3} alt="Apple" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand4} alt="Microsoft" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand5} alt="Lenovo" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand6} alt="Huawei" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand7} alt="Nexus" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand8} alt="Google" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand9} alt="Firefox" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand10} alt="Tesla" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand11} alt="Brave" />
                </div>
                <div className='w-full border border-[#f1f5f9] p-10'>
                    <img src={brand12} alt="Facebook" />
                </div>

            </div>
        </Animated>
    );
};

export default Brand;