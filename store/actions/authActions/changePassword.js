import axios from 'axios';

export const loading = () => ({
  type: 'LOADING',
});

export const passwordChangeSuccess = data => ({
  type: 'PASSWORD_CHANGE_SUCCESS',
  payload: data,
});

export const passwordChangeError = data => ({
  type: 'PASSWORD_CHANGE_ERROR',
  payload: data,
});

export const ChangePassword = (password, token) => async (dispatch) => {
  try {
    dispatch(loading());

    const resetPassword = await axios(
      `https://freyja-ah-backend.herokuapp.com/api/users/change-password?token=${token}`,
      {
        method: 'POST',
        data: { newPassword: password },
        headers: {
          accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );

    dispatch(passwordChangeSuccess(resetPassword.data.message));
  } catch (error) {
    dispatch(passwordChangeError('please send reset password request again'));
  }
};
