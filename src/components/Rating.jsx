import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ rating }) => {
    // Calculate the star rating based on the numerical rating
    const starRating = Math.round(rating * 2) / 2;

    // Create an array of stars based on the star rating
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < starRating) {
            stars.push(<AiFillStar key={i} size={20}/>);
        } else {
            stars.push(<AiOutlineStar key={i} size={20} />);
        }
    }

    // Render the star rating on the page
    return (
        <div className="flex flex-row text-[#ffd700]">
            {stars}
        </div>
    );
}

export default StarRating;
