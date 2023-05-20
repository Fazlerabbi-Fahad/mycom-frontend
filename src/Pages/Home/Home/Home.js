import React from 'react';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import GameProducts from '../GameProducts/GameProducts';
import Brand from '../Brand/Brand';
import TopSelling from '../TopSelling/TopSelling';
import BestSeller from '../BestSeller/BestSeller';
import NewArrivals from '../NewArrivals/NewArrivals';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <div className='bg-[#f8f8f8] lg:pt-12 '>
            <Banner></Banner>
            <Benefits></Benefits>
            <GameProducts></GameProducts>
            <Brand></Brand>
            <TopSelling></TopSelling>
            <BestSeller></BestSeller>
            <NewArrivals></NewArrivals>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;