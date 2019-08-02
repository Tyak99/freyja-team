import { GET_TEST, GET_ERRORS, INIT_GET_TEST } from '../actions/types';

export const initialState = {
  errors: {},
  data: [],
  isLoading: false,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GET_TEST:
      return {
        ...state,
        isLoading: true,
        data: [],
      };
    case GET_TEST:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default testReducer;
