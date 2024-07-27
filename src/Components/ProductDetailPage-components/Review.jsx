import React, { useState, useEffect, useRef } from 'react'
import StarRating from './StarRating';
import client1 from '../../imgs/client (1).png'
import client2 from '../../imgs/client (2).png'
import client3 from '../../imgs/client (3).png'
import downArrow from '../../imgs/downArrow.png'
import upArrow from '../../imgs/upArrow.png'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const Review = () => {
    const progressInterval = useRef(null);
    const [progress, setProgress] = useState(0);
    const currentCard = useSelector(state => state.currentCardReducer.currentCard);

    // useEffect(() => {
    //     progressInterval.current = setInterval(() => {
    //         setProgress(prev => {
    //             if (prev >= 100) {
    //                 clearInterval(progressInterval.current);
    //                 return 100;
    //             }
    //             return prev + 1;
    //         });
    //     }, 100);

    //     return () => {
    //         clearInterval(progressInterval.current);
    //     };
    // }, []);

    const ratings = [
        { label: 'Excellent', percentage: Number(currentCard.rating.toFixed(0)) * 10 },
        { label: 'Good', percentage: Number(currentCard.rating.toFixed(0)) * 20 },
        { label: 'Average', percentage: Number(currentCard.rating.toFixed(0)) * 17 },
        { label: 'Below Average', percentage: Number(currentCard.rating.toFixed(0)) * 15 },
        { label: 'Poor', percentage: Number(currentCard.rating.toFixed(0)) * 13 }
    ];

    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const renderReview = () => {
        const reviews = [];
        const clientImages = [client1, client2, client3];
        for (let i = 0; i < currentCard?.reviews.length; i++) {
            const formattedDate = format(new Date(currentCard?.reviews[i].date), 'yyyy-MM-dd');
            if (currentCard?.reviews[i]) {
                reviews.push(
                    <div className='row py-3 my-2 clientReview' key={i}>
                        <div className='col-2'>
                            <img src={clientImages[i % clientImages.length]} alt='client-img' />
                        </div>
                        <div className='col-10 px-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5 className='fw-bold fs-6'>{currentCard?.reviews[i].reviewerName}</h5>
                                <p className='my-0'>{formattedDate}</p>
                            </div>
                            <StarRating star={currentCard?.reviews[i].rating} />
                            <p>{currentCard?.reviews[i].comment}</p>
                        </div>
                    </div>
                );
            } else {
                reviews.push(
                    <p key={i}> No image available</p>
                );
            }
        }
        return reviews;
    };

    return (
        <>
            <div className='container'>
                <h1 className='my-5'>Review</h1>
                <div className='d-flex flex-column flex-md-row justify-content-between reviewRow'>
                    <div className='mx-auto mx-md-0 mb-4 mb-md-0 reviewRatingDiv'>
                        <div className='py-3 d-flex  flex-md-column align-items-center justify-content-evenly  justify-content-md-center'>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h1 className='m-0 reviewRating'>{currentCard.rating.toFixed(1)}</h1>
                                <p className='m-0'>of {(Number(currentCard.rating.toFixed(0)) + 56)} reviews</p>
                            </div>
                            <div className=''>
                                <StarRating star={currentCard.rating.toFixed(1)} />
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto mx-md-0 progressMainDiv'>
                        {ratings.map((rating, index) => (
                            <div className='progressDiv d-flex align-items-center justify-content-between mb-1' key={index}>
                                <h6 className='progressDivHeading'>{rating.label}</h6>
                                <div className='progressDivWidth d-flex align-items-center'>
                                    <div className='progress progresBarDiv'>
                                        <div className='progress-bar progress-bar-animated' role='progressbar' style={{ width: `${rating.percentage}%` }}></div>
                                    </div>
                                    <p className='m-0 px-2'>{rating.percentage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='my-5'>
                    <input placeholder='Leave Comment' className='w-100 p-3 border rounded-2'></input>
                </div>
                {/* /////// Clients Review ///////// */}
                <div>
                    {renderReview().slice(0, 2)}
                    {showMore && (<div>{renderReview().slice(2)}</div>)}
                </div>
                <div onClick={toggleShowMore} className='border rounded-3 p-2 m-auto d-flex align-items-center justify-content-around ProductDetailBtnDiv'>
                    {showMore ? (
                        <>
                            Show Less
                            <img src={upArrow} alt="Show Less" style={{ width: '20px', marginRight: '5px' }} />
                        </>
                    ) : (
                        <>
                            Show More
                            <img src={downArrow} alt="Show More" style={{ width: '20px', marginRight: '5px' }} />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Review;
