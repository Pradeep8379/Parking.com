import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ReviewStyl.css'

const CustomerReview = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      rating: 5,
      comment: 'Parking.com has made my life so much easier! I used to dread finding parking in busy cities, but now I can reserve a spot ahead of time and have peace of mind knowing that I have a guaranteed parking space.',
      author: 'John D.',
      location: 'New York City',
    },
    {
      id: 2,
      rating: 4,
      comment: 'I recently used Parking.com for a trip to San Francisco, and I was impressed with how easy it was to use. I found a parking garage near my hotel, reserved a spot, and paid through the app. When I arrived at the garage, my spot was waiting for me. I highly recommend this app to anyone who needs to find parking in a new city.',
      author: 'Emily S.',
      location: 'Los Angeles',
    },
    {
      id: 3,
      rating: 4,
      comment: 'I love the discounts that Parking.com offers! I use the app every day to find parking near my office, and I always get a great deal. It saves me so much money in the long run.',
      author: 'David K.',
      location: 'Chicago',
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div >
      <h2 className='text-center mt-4 pt-3 my-5'>Customer Reviews</h2>
    <div className='customer-reviews-container '>
      <div className="customer-reviews">
        <Slider {...settings}>
          {reviews.map(review => (
            <div key={review.id} className="customer-review ">
             
              <p className="comment text-dark m-4 p-4">{review.comment}</p>
              <h3  className='m-2 p-2 mx-5'>{review.author} - {review.location}</h3>
              <div className="rating m-2 p-2 mx-5">Rating:{review.rating}/5</div>
            </div>
          ))}
          </Slider>
          </div>
      </div>
    </div>
  );
}

export default CustomerReview;
