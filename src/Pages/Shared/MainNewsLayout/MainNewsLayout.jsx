import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import StarRating from '../StarRating/StarRating';
import { IoEye } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const MainNewsLayout = ({ article }) => {


  const { title, author, thumbnail_url, published_date, image_url, details, total_view } = article;



  const [isExpanded, setIsExpanded] = useState(false); // State to control "Read More"

  const [rating, setRating] = useState(0)

  // Determine the text to display
  const textToShow = isExpanded ? details : `${details.slice(0, 200)}...`; // Adjust the length as needed

  return (
    <div className="mt-5 mb-28 space-y-4">

    <div className='flex mb-5 justify-between'>
        <div className='flex items-center gap-3'>
            <img className='w-16 rounded-full' src={author.img} alt="" />
            <div>
                <h1 className='font-bold'>{author.name}</h1>
                <p>{author.published_date}</p>
            </div>

        </div>

        <div className='flex text-3xl items-center gap-8'>
            <FaRegBookmark />
            <FaShareAlt />
        </div>
    
    </div>




      <h1 className="text-xl font-semibold">{title}</h1>
      <img src={image_url} alt={title} className="w-full h-auto" />
      <p>{textToShow}</p>
      {details.length > 200 && ( // Show "Read More" button only if details are longer than 200 characters
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      )}

      <div className='flex justify-between text-xl'>
            <span><StarRating  rating={4}></StarRating></span>

            <div className='flex items-center gap-2'>
                <span><IoEye /></span>
                <p>{total_view}</p>

            </div>
      </div>


    </div>
  );
};

export default MainNewsLayout;
