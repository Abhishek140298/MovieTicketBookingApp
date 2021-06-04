import axios from 'axios';
let URL = 'http://127.0.0.1:5500/src/components/movies/MoviesData.json';

export const checkLoading = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
  };
};

export const getMovieData = () => {
  return (dispatch) => {
    dispatch({ type: 'IS_MOVIE_LOADING' });
    axios.get(URL).then((res) => {
      if (res.status === 200) {
        dispatch({ type: 'ON_SUCCESS_MOVIE_DATA', payload: res.data });
        console.log("data",res.data)
      }
    });
  };
};
