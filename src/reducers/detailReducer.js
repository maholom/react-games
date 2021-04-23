const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
}; //payload z detailAction

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: action.payload.game, //nasype informace z action
        screen: action.payload.screen,
        isLoading: false,
      };
    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
