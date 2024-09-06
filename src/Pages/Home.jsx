import React from 'react';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar';
import LeftSideNav from './Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import BreakingNews from './Shared/BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 '>
                <div className='border border-red-400'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2 text-center border border-red-400'>
                    <h1 className="text-4xl">News coming soon </h1>
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>


            </div>
           


        </div>
    );
};

export default Home;