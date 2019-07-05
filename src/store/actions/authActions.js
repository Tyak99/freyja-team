import axios from 'axios';
import {
  SET_CURRENT_USER,
  LOGIN_ERROR,
  INIT_AUTH_REQUEST,
  END_AUTH_REQUEST,
} from './types';

const authUrl = 'https://freyja-ah-backend.herokuapp.com/api/';

export const setCurrentUser = payload => ({
  type: SET_CURRENT_USER,
  payload,
});

export const loginUser = payload => (dispatch) => {
  dispatch({ type: INIT_AUTH_REQUEST });

  axios.post(`${authUrl}users/login`, payload)
    .then((res) => {
      dispatch({ type: END_AUTH_REQUEST });
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      dispatch(setCurrentUser(user));
    })
    .catch((err) => {
      dispatch({ type: END_AUTH_REQUEST });
      const { data } = err.response;

      const errorObj = Array.isArray(data.error) ? { error: data.error[0].msg } : data;
      dispatch({
        type: LOGIN_ERROR,
        payload: errorObj,
      });
    });
};
