import jwtDecode from 'jwt-decode';
import { setCurrentUser, setError } from '../authActions';

export const socialAuth = token => async (dispatch) => {
  try {
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
  } catch (error) {
    const { err } = error.response.data;
    dispatch(setError(err));
  }
};


export const socialAuthPath = (authType) => {
  const url = 'https://freyja-ah-backend.herokuapp.com';
  window.location.href = `${url}/api/auth/${authType}`;
};

export const getToken = (tokenString) => {
  const startIndex = tokenString.indexOf('=') + 1;
  const token = tokenString.slice(startIndex);
  return token;
};
