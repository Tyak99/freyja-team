
import { get } from 'axios';
import { GET_ALL_MODULES, MODULES_ERROR } from './types';

const getModules = () => async (dispatch) => {
  try {
    const modulesRequest = await get('https://freyja-ah-backend.herokuapp.com/api/modules', {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });

    const { data } = modulesRequest.data;
    return dispatch({
      type: GET_ALL_MODULES,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: MODULES_ERROR,
      payload: error,
    });
  }
};

export { getModules };
