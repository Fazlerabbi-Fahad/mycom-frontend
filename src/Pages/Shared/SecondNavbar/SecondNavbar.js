import React from 'react';
import { AiOutlineHeart, AiOutlineUser, AiOutlineBars } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SecondNavbar = () => {
    const items = <>
        <li><Link to='/home'>Home</Link></li>
        <li><a href="">Products</a></li>
        <li><a href="">Shop</a></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><a href="">Contact</a></li>
    </>
    return (
        <div>
            <hr className='text-[#e2e8f0]'></hr>
            <div className="navbar text-black m-0 p-0 lg:py-5 max-w-screen-lg m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box">
                            <ul className="menu menu-horizontal px-1 mt-5">
                                <li><a><AiOutlineHeart className='text-2xl'></AiOutlineHeart ></a></li>
                                <li><a><FiShoppingCart className='text-2xl'></FiShoppingCart ></a></li>
                                <li><a><AiOutlineUser className='text-2xl'></AiOutlineUser ></a></li>
                            </ul>
                            <ul className="menu">
                                <li className='lg:rounded'>
                                    <input type="text" placeholder='search product' className="rounded p-4" />
                                    <button type="submit" class="btn btn-primary text-white text-xs">Search</button>
                                </li>
                            </ul>
                            <div>
                                <select className="select w-full max-w-xs text-black">
                                    <option disabled selected><AiOutlineBars></AiOutlineBars >All Categories</option>
                                    <option>Homer</option>
                                    <option>Marge</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                            </div>
                            {items}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold normal-case text-xl ms-3"><span className='text-primary'>MyCom</span><span className='text-secondary'>M</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">

                        <li className='rounded'>
                            <input type="text" placeholder='search product' className="rounded" />
                            <button type="submit" class="btn btn-secondary text-white text-xs">Search</button>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end selected">
                    <ul className="menu menu-horizontal px-1">
                        <li><a><AiOutlineHeart className='text-2xl'></AiOutlineHeart ></a></li>
                        <li><a><FiShoppingCart className='text-2xl'></FiShoppingCart ></a></li>
                        <li><a><AiOutlineUser className='text-2xl'></AiOutlineUser ></a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-primary selected">
                <div className='max-w-screen-lg m-auto'>
                    <div className='navbar'>
                        <div className="navbar-start">
                            <select className="select w-full max-w-xs text-black">
                                <option> <AiOutlineBars />All Categories</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <div className="navbar-center text-white hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {items}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a className="btn rounded-none text-xs">Become a seller<FaGreaterThan className='text-xs ml-1' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SecondNavbar;