import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DemoNews from '../DemoNews/DemoNews';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

            fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[]);

    const [demoNews,setDemoNews] = useState([]);

    useEffect(() => {

            fetch('demonews.json')
            .then(res => res.json())
            .then(data => setDemoNews(data))
    },[]);

    return (
        <div>
            <h1 className="text-2xl font-bold">All Categories: {categories.length}</h1>
            {
                categories.map(category => <Link 
                className="block ml-5 text-xl   py-6 mt-6 px-4 bg-gray-300 rounded-2xl"
                key={category.id}>{category.name}</Link>)
            }

            {
                demoNews.map(demo => <DemoNews demo={demo}></DemoNews>)
            }
        </div>
    );
};

export default LeftSideNav;