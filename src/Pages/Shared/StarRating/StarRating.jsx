import React from 'react';

const StarRating = ({rating}) => {

    const totalStars = 5;
  const filledStars = Math.floor(rating); // 4 filled stars
  const emptyStars = totalStars - filledStars; // 1 empty star


    return (
        <div>
            {/* Render filled stars */}
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} style={{ color: 'gold', fontSize: '34px' }}>★</span>
        ))}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} style={{ color: 'gray', fontSize: '34px' }}>☆</span>
        ))}
        </div>
    );
};

export default StarRating;