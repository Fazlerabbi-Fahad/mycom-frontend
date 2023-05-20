import React from 'react';
import Navbar from "./../Pages/Shared/Navbar/Navbar";
import SecondNavbar from "./../Pages/Shared/SecondNavbar/SecondNavbar";
import Footer from "./../Pages/Shared/Footer/Footer";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SecondNavbar></SecondNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;