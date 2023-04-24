import React from 'react';
import { Animated } from "react-animated-css";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";

const GameProducts = () => {
    return (
        <Animated animationIn="slideInUp" animationInDuration="3000" isVisible={true}>
            <div className='mt-9'>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-3xl'>Gamer World</h2>
                    <div className='flex justify-evenly items-center'>
                        <button className='text-lg font-bold me-2'>View All </button>
                        <div>
                            <AiOutlineArrowRight className='text-lg' />
                        </div>
                    </div>
                </div>
                <div className='mt-5 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="bg-base-100 rounded-0 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex ">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />


                            </div>
                            <h2 className="font-semibold text-sm">Xoggle aute et pariatur adipisicing nostrud et </h2>
                            <p className='text-[red] font-semibold'>$18.73</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-full">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 rounded-0 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex ">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />


                            </div>
                            <h2 className="font-semibold text-sm">Xoggle aute et pariatur adipisicing nostrud et </h2>
                            <p className='text-[red] font-semibold'>$18.73</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-full">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 rounded-0 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex ">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />


                            </div>
                            <h2 className="font-semibold text-sm">Xoggle aute et pariatur adipisicing nostrud et </h2>
                            <p className='text-[red] font-semibold'>$18.73</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-full">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 rounded-0 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex ">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />


                            </div>
                            <h2 className="font-semibold text-sm">Xoggle aute et pariatur adipisicing nostrud et </h2>
                            <p className='text-[red] font-semibold'>$18.73</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-full">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Animated >
    );
};

export default GameProducts;