const INTIAL_STATE = {
  isLoading: false,
  movieData: [],
};

export default function movieDataReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'ON_SUCCESS_MOVIE_DATA':
      return {
        ...state,
        movieData: action.payload,
        isLoading: true,
      };
    default:
      return state ;
  }
}
