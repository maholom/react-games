const initialState = { game: {}, screen: {} }; //payload z detailAction

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: action.payload.game, //nasype informace z action
        screen: action.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
