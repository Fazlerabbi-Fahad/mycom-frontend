import React from 'react';
import { Animated } from "react-animated-css";
import seller1 from "../../../Images/Sellers/saller1.png";
import seller2 from "../../../Images/Sellers/saller2.png";
import seller3 from "../../../Images/Sellers/saller3.png";
import seller4 from "../../../Images/Sellers/saller4.png";
import seller5 from "../../../Images/Sellers/saller5.png";

const BestSeller = () => {
    return (
        <Animated animationIn="slideInRight" animationInDuration="3000" isVisible={true}>
            <div className='max-w-screen-lg m-auto'>
                <div className='mt-12'>
                    <div className='flex justify-between '>
                        <h2 className='font-bold lg:text-3xl text-xl'>Best Sellers</h2>
                    </div>
                    <div className='mt-5 py-5 px-5 shadow-xs rounded-md grid lg:grid-cols-5 grid-cols-1 gap-13'>
                        <div className='m-auto'>
                            <div>
                                <div className="avatar">
                                    <div className="w-[170px] rounded-full bg-base-100">
                                        <div className='w-[96px] h-[99px] mt-8 m-auto'>
                                            <img src={seller1} alt='Shopno BD' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-md font-medium ml-10">Shopno BD</h2>
                                </div>
                            </div>
                        </div>
                        <div className='m-auto'>
                            <div>
                                <div className="avatar">
                                    <div className="w-[170px] rounded-full bg-base-100">
                                        <div className='w-[98px] h-[73px] mt-12 m-auto'>
                                            <img src={seller2} alt='Eecoms Shop' className='w-[50%]' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-md font-medium ml-8">Eecoms Shop</h2>
                                </div>
                            </div>
                        </div>
                        <div className='m-auto'>
                            <div>
                                <div className="avatar">
                                    <div className="w-[170px] rounded-full bg-base-100">
                                        <div className='w-[95px] h-[85px] mt-10 m-auto'>
                                            <img src={seller3} alt='Fusion X' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-md font-medium ml-14">Fusion X</h2>
                                </div>
                            </div>
                        </div>
                        <div className='m-auto selected'>
                            <div>
                                <div className="avatar">
                                    <div className="w-[170px] rounded-full bg-base-100">
                                        <div className='w-[77px] h-[89px] mt-8 m-auto'>
                                            <img src={seller4} alt='Rikayi Rox' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-md font-medium ml-12">Rikayi Rox</h2>
                                </div>
                            </div >
                        </div >
                        <div className='m-auto selected'>
                            <div>
                                <div className="avatar">
                                    <div className="w-[170px] rounded-full bg-base-100">
                                        <div className='w-[97px] h-[94px] mt-10 m-auto'>
                                            <img src={seller5} alt='Habbriyi' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-md font-medium ml-14">Habbriyi</h2>
                                </div>
                            </div>
                        </div>

                    </div >
                </div >
            </div>

        </Animated >
    );
};

export default BestSeller;