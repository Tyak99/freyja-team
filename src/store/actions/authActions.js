import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
  SET_CURRENT_USER,
  LOGIN_ERROR,
  INIT_AUTH_REQUEST,
  END_AUTH_REQUEST,
} from './types';
import setAuthToken from '../../utils/setAuthToken';

const authUrl = 'https://freyja-ah-backend.herokuapp.com/api/';

export const setCurrentUser = payload => ({
  type: SET_CURRENT_USER,
  payload,
});

export const loginUser = payload => async (dispatch) => {
  dispatch({ type: INIT_AUTH_REQUEST });

  try {
    const request = await axios.post(`${authUrl}users/login`, payload);
    dispatch({
      type: END_AUTH_REQUEST,
    });

    const { token } = request.data;
    localStorage.setItem('token', token);

    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
  } catch (error) {
    dispatch({
      type: END_AUTH_REQUEST,
    });

    const { data } = error.response;
    const errorObj = Array.isArray(data.error) ? { error: data.error[0].msg } : data;
    dispatch({
      type: LOGIN_ERROR,
      payload: errorObj,
    });
  }
};
