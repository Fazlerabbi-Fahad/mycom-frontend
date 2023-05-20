import React from 'react';
import USA from "../../../Images/Flag/USA.jpg";
import Bangladesh from "../../../Images/Flag/Bangladesh.jpg";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li><a>Account</a></li>
        <li><Link to='/trackorder'>Track Order</Link></li>
        <li><Link to='/about'>Support</Link></li>
    </>
    return (
        <div className='max-w-screen-lg m-auto bg-transparent'>
            <div className="navbar text-black p-[0px] m-[0px]">
                <div className="navbar-start">

                    <div className="navbar-center flex ">
                        <ul className="menu menu-horizontal text-xs">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end text-xs selected">
                    <select className='bg-white mr-5'>
                        <option selected>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={USA} />
                                </div>USA
                            </div>
                        </option>
                        <option>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={Bangladesh} />
                                </div>Bangladesh
                            </div>
                        </option>
                    </select>
                    <select className='bg-white mr-5'>
                        <option selected>
                            <div>
                                <p>USD</p>
                            </div>
                        </option>
                        <option>
                            <div>
                                <p>BDT</p>
                            </div>
                        </option>
                    </select>
                    <select className='bg-white '>
                        <option selected>
                            <div>
                                <p>English</p>
                            </div>
                        </option>
                        <option>
                            <div>
                                <p>Bangla</p>
                            </div>
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;