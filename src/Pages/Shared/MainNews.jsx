import React, { useEffect, useState } from 'react';
import MainNewsLayout from './MainNewsLayout/MainNewsLayout';

const MainNews = () => {

    const [news,setNews] = useState([]);

    useEffect(() => {

            fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    },[]);


    return (
        <div>
            <h1 className='text-2xl font-bold'>Headline Journal Home</h1>
            {

                news.slice(18,24).map(article => <MainNewsLayout article={article}></MainNewsLayout>)
            }
           
        </div>
    );
};

export default MainNews;