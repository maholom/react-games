const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

//Reducer
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state };
    default:
      return { ...state };
  }
};

//Action creator
const fetchGames = () => {
  return {
    type: 'FETCH_GAMES',
  };
};

export default gamesReducer;
