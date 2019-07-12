/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Set loged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});
export const setError = error => ({
  type: GET_ERRORS,
  errors: error,
});

// Register
export const registerUser = (newUser, history) => async dispatch => {
  try {
    const user = await axios.post('https://freyja-ah-backend.herokuapp.com/api/users', newUser);

    if (user) {
      // Save to local storage
      const { token } = user.data;
      // Set token to local storage
      localStorage.setItem('jwtToken', token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      history.push('/modules');
    }
  } catch (err) {
    const { error } = err.response.data;
    dispatch(setError(error));
  }
};
