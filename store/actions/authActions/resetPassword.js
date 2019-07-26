import axios from 'axios';

export const loading = () => ({
  type: 'LOADING',
});

export const passwordResetSuccess = data => ({
  type: 'PASSWORD_RESET_SUCCESS',
  payload: data,
});

export const passwordResetError = data => ({
  type: 'PASSWORD_RESET_ERROR',
  payload: data,
});

export const ResetPassword = user => async (dispatch) => {
  try {
    dispatch(loading());

    const resetPassword = await axios('https://freyja-ah-backend.herokuapp.com/api/users/reset', {
      method: 'POST',
      data: { email: user },
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    dispatch(passwordResetSuccess(resetPassword.data.message));
  } catch (error) {
    dispatch(passwordResetError(error.response.data.message));
  }
};
