import React from 'react';
import { Animated } from "react-animated-css";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const GameProducts = () => {
    return (
        <Animated animationIn="slideInUp" animationInDuration="3000" isVisible={true}>
            <div className='max-w-screen-lg m-auto'>
                <div className='mt-12'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold lg:text-3xl text-xl'>Gamer World</h2>
                        <div className='flex justify-evenly items-center'>
                            <button className='lg:text-lg font-bold me-2 text-xl'>View All </button>
                            <div>
                                <AiOutlineArrowRight className='lg:text-lg text-xl' />
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
                                    <button className="btn btn-secondary w-full"><HiOutlineShoppingBag className='me-1' />Buy Now</button>
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
                                    <button className="btn btn-secondary w-full"><HiOutlineShoppingBag className='me-1' />Buy Now</button>
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
                                    <button className="btn btn-secondary w-full"><HiOutlineShoppingBag className='me-1' />Buy Now</button>
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
                                    <button className="btn btn-secondary w-full"><HiOutlineShoppingBag className='me-1' />Buy Now</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </Animated >
    );
};

export default GameProducts;