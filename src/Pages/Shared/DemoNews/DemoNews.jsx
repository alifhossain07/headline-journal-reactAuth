import React from 'react';
import moment from 'moment';
import { SlCalender } from "react-icons/sl";


const DemoNews = ({demo}) => {

    const {title, category_name, thumbnail_url,image_url} = demo;


    return (
        <div className='mt-10 flex flex-col space-y-5'>
            <img className='rounded-xl' src={image_url} alt="" />
            <h1 className='text-xl font-bold'>{title}</h1>
            <div className='flex justify-between'>
                <p className='font-semibold text-lg'>{category_name}</p>
                <span className='flex items-center gap-3 text-lg'><SlCalender className='text-xl' />{moment().startOf('day').fromNow()}</span>


            </div>
        </div>
    );
};

export default DemoNews;