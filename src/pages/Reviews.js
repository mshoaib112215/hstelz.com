import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { housesData } from '../data';
import Review from '../components/Reviews';

import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
    const { id } = useParams();
    const house = housesData.find((house) => house.id === parseInt(id));

    const [selectedStar, setSelectedStar] = useState(0);

    const handleStarClick = (star) => {
        if(star =='All'){
            setSelectedStar(0);
        }else{

            setSelectedStar(star);
        }
    };


    const filteredReviews = selectedStar === 0
        ? house.reviews
        : house.reviews.filter(review => review.rating === selectedStar);

    return (
        <div className="container mx-auto min-h-[800px] mb-14">
            <h1 className="mt-6 font-semibold mb-3 text-gray-700 text-3xl flex gap-6 items-center justify-center">
                Reviews
            </h1>

            <div className="flex justify-center gap-4 mb-5">
                {['All',1, 2, 3, 4, 5].map((star) => (
                    

                    <button
                    key={star}
                        className={`border rounded-full px-3 py-1 ${star === selectedStar || star === "All"? 'bg-violet-600 text-white' : 'bg-white' 
                            } `}
                        onClick={() => handleStarClick(star)}
                    >
                        <span className="sr-only">{star} stars</span>
                        {star ==='All'?"All": [...Array(star)].map((_, index) => (
                            <AiFillStar key={index} className="inline-block" color="#ffd700" size={20} />
                            ))}
                    </button>
                    
                ))}
            </div>

            {filteredReviews.length > 0 ? (
                filteredReviews.map((review, index) => <Review key={index} {...review} />)
            ) : (
                <p className="text-center mt-4 text-gray-600">No reviews found for {selectedStar} stars</p>
            )}
        </div>
    );
};

export default Reviews;
