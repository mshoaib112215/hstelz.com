import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Review = ({ image, name, date, description, rating }) => {
    const starRating = Math.round(rating * 2) / 2;
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < starRating) {
            stars.push(<AiFillStar key={i} color={'#ffd700'} />);
        } else {
            stars.push(<AiOutlineStar key={i} color={'#ffd700'} className="text-gray-300" />);
        }
    }

    return (
        <div className="flex items-center mb-4 bg-white rounded-3xl px-2 py-3">
            <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
            
            <div className="flex-1">
                <div className="flex items-center">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className="flex items-center ml-4">
                        {stars}
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{date}</p>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default Review;
