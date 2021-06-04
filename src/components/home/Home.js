import React from 'react';
import { connect } from 'react-redux';
import { checkLoading } from '../../actions/MovieDataAction';

const Home = (props) => {
  return (
    <div>
      <h1>{props.isLoading.toString()}</h1>
      <button
        onClick={() => {
          props.checkLoading();
        }}
      >
        Loading
      </button>
    </div>
  );
};

const mapStatetToProps = ({ MovieReducer }) => {
  const { isLoading } = MovieReducer;
  return { isLoading };
};
export default connect(mapStatetToProps, { checkLoading })(Home);
