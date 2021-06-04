import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMovieData } from '../../actions/MovieDataAction';
import './MovieDetails.css';
import MovieBooking from './MovieBooking';

const MovieDetails = (props) => {
  const [booking, setBooking] = useState(false);
  useEffect(() => {
    props.getMovieData();
  }, []);
  const bookTicket = () => {
    console.log('Ticket Booked');
    setBooking(true);
  };
  const bookingProcess = () => {
    console.log(props.movieData[props.match.params.id].price)
    return (
      <>
        <MovieBooking  price={props.movieData[props.match.params.id].price} />
      </>
    );
  };
  const movieDetails = () => {
    console.log('props', props);
    if (props.isLoading) {
      return (
        <div>
          <img src={props.movieData[props.match.params.id].image} />
          <h3>{props.movieData[props.match.params.id].title}</h3>
          <h3>{props.movieData[props.match.params.id].category}</h3>
          <h3>{props.movieData[props.match.params.id].language}</h3>
          {props.movieData[props.match.params.id].interest.map(
            (cval, index) => {
              return <div>{cval}</div>;
            }
          )}
          <h4>{props.movieData[props.match.params.id].releasedate}</h4>
          <h4>{props.movieData[props.match.params.id].duration}</h4>
          <div className='booking_button' onClick={bookTicket}>
            Book Ticket
          </div>
        </div>
      );
    } else {
      return <h1>loadding</h1>;
    }
  };
  return (
    <div>
      {movieDetails()}
      {booking ? bookingProcess() : null}
    </div>
  );
};
const mapStateToProps = ({ MovieReducer }) => {
  const { movieData, isLoading } = MovieReducer;
  return { movieData, isLoading };
};

export default connect(mapStateToProps, { getMovieData })(MovieDetails);
