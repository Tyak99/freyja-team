import { SET_CURRENT_USER, GET_ERRORS } from '../actions/types';
import isEmpty from '../../src/validations/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.error),
        errors: action.errors,
      };
    default:
      return state;
  }
}
