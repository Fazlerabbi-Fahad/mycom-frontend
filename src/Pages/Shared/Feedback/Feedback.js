import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import Bangladesh from "../../../Images/Flag/Bangladesh.jpg";

const Feedback = () => {
    const [item, setItem] = useState(0);
    const slide = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className='my-20'>
            <h2 className='font-semibold lg:text-3xl text-xl text-center mb-8'>Customers Feedback</h2>
            <div className="carousel w-full">
                <div id={`slide${slide[0]}`} className="carousel-item a">
                    <div className="bg-[#f8f8f8] h-[400px] w-[385px] p-10 mx-5">
                        <div className="flex-col">
                            <div className="flex mb-5">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <p className='text-[13px] ms-2'>(5.0)</p>

                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book.</p>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 flex justify-start">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 me-5">
                                                <img src={Bangladesh} className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium">Ridoy Roy</h1>
                                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id={`slide${slide[1]}`} className="carousel-item a">
                    <div className="bg-[#f8f8f8] h-[400px] w-[385px] p-10 mx-5">
                        <div className="flex-col">
                            <div className="flex mb-5">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <p className='text-[13px] ms-2'>(5.0)</p>

                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book.</p>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 flex justify-start">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 me-5">
                                                <img src={Bangladesh} className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium">Ridoy Roy</h1>
                                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id={`slide${slide[2]}`} className="carousel-item a">
                    <div className="bg-[#f8f8f8] h-[400px] w-[385px] p-10 mx-5">
                        <div className="flex-col">
                            <div className="flex mb-5">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <p className='text-[13px] ms-2'>(5.0)</p>

                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book.</p>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 flex justify-start">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 me-5">
                                                <img src={Bangladesh} className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium">Ridoy Roy</h1>
                                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id={`slide${slide[3]}`} className="carousel-item a">
                    <div className="bg-[#f8f8f8] h-[400px] w-[385px] p-10 mx-5">
                        <div className="flex-col">
                            <div className="flex mb-5">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <p className='text-[13px] ms-2'>(5.0)</p>

                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book.</p>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 flex justify-start">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 me-5">
                                                <img src={Bangladesh} className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium">Ridoy Roy</h1>
                                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id={`slide${slide[4]}`} className="carousel-item a">
                    <div className="bg-[#f8f8f8] h-[400px] w-[385px] p-10 mx-5">
                        <div className="flex-col">
                            <div className="flex mb-5">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <p className='text-[13px] ms-2'>(5.0)</p>

                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book.</p>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 flex justify-start">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 me-5">
                                                <img src={Bangladesh} className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium">Ridoy Roy</h1>
                                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id={`slide${slide[5]}`} className="carousel-item a">
                    <div className="bg-[#f8f8f8] h-[400px] w-[385px] p-10 mx-5">
                        <div className="flex-col">
                            <div className="flex mb-5">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <p className='text-[13px] ms-2'>(5.0)</p>

                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book.</p>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 flex justify-start">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 me-5">
                                                <img src={Bangladesh} className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium">Ridoy Roy</h1>
                                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id={`slide${slide[6]}`} className="carousel-item a">
                    <div className="bg-[#f8f8f8] h-[400px] w-[385px] p-10 mx-5">
                        <div className="flex-col">
                            <div className="flex mb-5">
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <AiFillStar className='text-[orange]' />
                                <p className='text-[13px] ms-2'>(5.0)</p>

                            </div>
                            <div>
                                <p className='text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book.</p>
                            </div>
                            <div>
                                <div>
                                    <div className="mt-5 flex justify-start">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 me-5">
                                                <img src={Bangladesh} className='rounded-full' />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-medium">Ridoy Roy</h1>
                                            <p className="text-[#64748b] font-thin text-justify tracking-wide leading-7 lg:text-md text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <div className="flex justify-center w-full py-5 mt-5 gap-2">
                {
                    item <= 1 ?
                        <a onClick={() => setItem(slide.length)}
                            href={`about#slide${item}`}
                            className="btn btn-ghost border-primary text-primary rounded-full">❮</a>
                        :
                        <a onClick={() => setItem(item - 1)}
                            href={`about#slide${item}`}
                            className="btn btn-ghost border-primary text-primary rounded-full">❮</a>

                }
                {
                    item >= slide.length ?
                        <a onClick={() => setItem(1)}
                            href={`about#slide${item}`}
                            className="btn btn-ghost border-primary text-primary rounded-full">❯</a>
                        :
                        <a onClick={() => setItem(item + 1)}
                            href={`about#slide${item}`}
                            className="btn btn-ghost border-primary text-primary rounded-full">❯</a>

                }


            </div>
        </div >
    );
};

export default Feedback;