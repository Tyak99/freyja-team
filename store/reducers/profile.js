import * as actionTypes from '../constants/profileContants';

export const initialState = {
  error: null,
  data: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.GET_PROFILE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.UPLOAD_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPLOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          image: action.imageUrl,
        },
      };
    case actionTypes.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
