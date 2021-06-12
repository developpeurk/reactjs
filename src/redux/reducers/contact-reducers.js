const intialState = {
  contacts: [],
};
const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'GET_CONTACT':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
