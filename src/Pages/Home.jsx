import React from 'react';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar';
import LeftSideNav from './Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import BreakingNews from './Shared/BreakingNews';
import MainNews from './Shared/MainNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-16'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2  '>
                    <MainNews></MainNews>
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>


            </div>
           


        </div>
    );
};

export default Home;