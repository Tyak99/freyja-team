import { GET_ALL_MODULES, MODULES_ERROR } from '../actions/types';

const initialState = {
  allModules: [],
  errors: {},
};

const modulesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MODULES:
      return {
        ...state,
        allModules: payload,
      };

    case MODULES_ERROR:
      return {
        ...state,
        errors: payload,
      };

    default:
      return state;
  }
};

export default modulesReducer;
