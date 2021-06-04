import React, { useEffect } from 'react';
import MovieCard from './MovieCard';
import './Movies.css';
import { connect } from 'react-redux';
import { getMovieData } from '../../actions/MovieDataAction';

const Movies = (props) => {
  useEffect(() => {
    props.getMovieData();
  }, []);
  return (
    <div>
      <h2>Movies List</h2>
      <div className='data_map_card'>
        {props.movieData.map((cval, index) => {
          return (
            <MovieCard
              id={index}
              image={cval.image}
              title={cval.title}
              category={cval.category}
              language={cval.language}
            />
          );
        })}
        ;
      </div>
    </div>
  );
};

const mapStateToProps = ({MovieReducer}) => {
  const {movieData, isLoading}= MovieReducer;
  return {movieData, isLoading};
};

export default connect(mapStateToProps, { getMovieData })(Movies);
