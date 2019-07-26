import {
  INIT_MODULE_REQUEST,
  GET_ALL_MODULES,
  MODULES_ERROR,
  GET_SINGLE_MODULE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  allModules: [],
  singleModule: {},
  errors: {},
};

const modulesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_MODULE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_MODULES:
      return {
        ...state,
        allModules: payload,
      };
    case GET_SINGLE_MODULE:
      return {
        ...state,
        isLoading: false,
        singleModule: payload,
      };
    case MODULES_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default modulesReducer;
