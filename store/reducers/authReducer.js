export const initialState = {
  passwordResetError: '',
  passwordResetSuccess: '',
  isloading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isloading: true,
      };
    case 'PASSWORD_RESET_ERROR':
      return {
        ...state,
        passwordResetError: 'invalid email',
        passwordResetSuccess: '',
        isloading: false,
      };
    case 'PASSWORD_RESET_SUCCESS':
      return {
        ...state,
        passwordResetError: '',
        passwordResetSuccess: 'Please check your email',
        isloading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
