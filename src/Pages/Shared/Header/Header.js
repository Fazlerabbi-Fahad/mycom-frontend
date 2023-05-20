import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    return (
        <div>
            <div className='bg-secondary w-full h-[250px] opacity-90'>
                <div className='max-w-screen-lg m-auto'>
                    <div className='text-white text-xs lg:p-5'>
                        <Link to='/home'>Home</Link>/<span>{children}</span>
                    </div>
                    <div className='max-w-screen-lg m-auto lg:p-10'>
                        <div className="card-body  text-center lg:pt-5 pt-20">
                            <h2 className="font-bold lg:text-3xl text-2xl text-white">{children}</h2>
                        </div>
                    </div >
                </div >
            </div>
        </div>
    );
};

export default Header;