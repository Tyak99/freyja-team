/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, LOGIN_ERROR, INIT_AUTH_REQUEST, END_AUTH_REQUEST, VERIFY_USER } from './types';
import setAuthToken from '../../src/utils/setAuthToken';

const authUrl = 'https://freyja-ah-backend.herokuapp.com/api/';
// Set loged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const setError = error => ({
  type: GET_ERRORS,
  errors: error,
});

export const verifyUser = state => ({
  type: VERIFY_USER,
  isVerified: state,
});

// Register
export const registerUser = (newUser, history) => async dispatch => {
  try {
    const user = await axios.post('https://freyja-ah-backend.herokuapp.com/api/users', newUser);

    if (user) {
      // Save to local storage
      const { token } = user.data;
      // Set token to local storage
      localStorage.setItem('token', token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      history.push('/dashboard');
    }
  } catch (err) {
    const { error } = err.response.data;
    dispatch(setError(error));
  }
};

export const loginUser = payload => async dispatch => {
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

export const verifyAuthUser = (token, history) => async dispatch => {
  try {
    await axios(`https://freyja-ah-backend.herokuapp.com/api/user/verify/${token}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await dispatch(verifyUser("you've been verified, Redirecting to your profile page..."));

    setTimeout(() => {
      history.push('/profile');
    }, 3000);
  } catch (error) {
    dispatch(verifyUser("Couldn't verify you, Please chcek the link sent to your email again."));
  }
};
