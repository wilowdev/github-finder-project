const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        mounted: true,
      };
    case 'CLEAR_USERS':
      return {
        // ...state,
        users: [],
        mounted: false,
      };
    case 'SET_LOADING':
      return {
        loading: true,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
        mounted: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
