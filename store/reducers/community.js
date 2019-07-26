import { GET_COMMUNITY_MESSAGES, GET_COMMUNITY_MESSAGES_ERROR, LOADING } from '../actions/types';

export const initialState = {
  error: null,
  allMessages: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMUNITY_MESSAGES:
      return {
        ...state,
        allMessages: action.data,
        isLoading: false,
        error: null,
      };
    case GET_COMMUNITY_MESSAGES_ERROR:
      return {
        ...state,
        allMessages: {},
        isLoading: false,
        error: action.data,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
