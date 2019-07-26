import { SET_CURRENT_USER, GET_ERRORS, LOGIN_ERROR, INIT_AUTH_REQUEST, END_AUTH_REQUEST, VERIFY_USER } from '../actions/types';
import isEmpty from '../../src/validations/isEmpty';

export const initialState = {
  passwordResetError: '',
  passwordResetSuccess: '',
  passwordChangeError: '',
  passwordChangeSuccess: '',
  isLoading: false,
  isAuthenticated: false,
  user: {},
  errors: {},
  verified: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    case END_AUTH_REQUEST:
      return {
        ...state,
        isLoading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.error),
        errors: action.errors,
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'PASSWORD_RESET_ERROR':
      return {
        ...state,
        passwordResetError: 'invalid email',
        passwordResetSuccess: '',
        isLoading: false,
      };
    case 'PASSWORD_RESET_SUCCESS':
      return {
        ...state,
        passwordResetError: '',
        passwordResetSuccess: 'Please check your email',
        isLoading: false,
      };
    case 'PASSWORD_CHANGE_ERROR':
      return {
        ...state,
        passwordChangeError: action.payload,
        passwordChangeSuccess: '',
        isLoading: false,
      };
    case 'PASSWORD_CHANGE_SUCCESS':
      return {
        ...state,
        passwordChangeError: '',
        passwordChangeSuccess: action.payload,
        isLoading: false,
      };
    case VERIFY_USER:
      return {
        ...state,
        verified: action.isVerified,
      };
    default:
      return state;
  }
};

export default authReducer;
