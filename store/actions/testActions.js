import axios from 'axios';
import { GET_TEST, GET_ERRORS, INIT_GET_TEST } from './types';

const token = localStorage.getItem('token');
export const getTestSuccess = data => ({
  type: GET_TEST,
  payload: data,
});

export const setError = error => ({
  type: GET_ERRORS,
  errors: error,
});

export const getTest = moduleId => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({
      type: INIT_GET_TEST,
    });
    const test = await axios.get(
      `https://freyja-ah-backend.herokuapp.com/api/tests/${moduleId}`,
      config,
    );
    if (test) {
      const { data } = test.data;
      dispatch(getTestSuccess(data));
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};
