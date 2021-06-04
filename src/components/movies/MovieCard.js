import React, { useState } from 'react';
import './MovieCard.css';
import { Redirect, Link } from 'react-router-dom';

const MovieCard = (props) => {
  const [booking, setBooking] = useState(false);

  const openBookingOption = () => {
    setBooking(true);

    console.log(booking);
  };
  const bookingButton = () => {
    // return (
    //   <Redirect to="/booking"/ >
    // );
  };

  return (
    <>
      <Link to={{ pathname: `/movies/${props.id}` }}>
        <div className='movie_card'>
          <img src={props.image} />
          <h3>{props.title}</h3>
          <h3>{props.category}</h3>
          <h3>{props.language}</h3>
        </div>
        {booking ? bookingButton() : null}
      </Link>
    </>
  );
};
export default MovieCard;
