import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SecondNavbar from '../../Shared/SecondNavbar/SecondNavbar';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import GameProducts from '../GameProducts/GameProducts';
import Brand from '../Brand/Brand';
import TopSelling from '../TopSelling/TopSelling';
import BestSeller from '../BestSeller/BestSeller';
import NewArrivals from '../NewArrivals/NewArrivals';
import Subscription from '../Subscription/Subscription';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SecondNavbar></SecondNavbar>
            <Banner></Banner>
            <Benefits></Benefits>
            <GameProducts></GameProducts>
            <Brand></Brand>
            <TopSelling></TopSelling>
            <BestSeller></BestSeller>
            <NewArrivals></NewArrivals>
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default Home;