import axios from 'axios';
import * as actionCreators from '../constants/profileContants';

const url = 'https://freyja-ah-backend.herokuapp.com/api/profiles';
const token = localStorage.getItem('token');
export const getProfileSuccess = profile => ({
  type: actionCreators.GET_PROFILE_SUCCESS,
  data: profile,
});

export const getProfileFailed = error => ({
  type: actionCreators.GET_PROFILE_FAILED,
  error,
});

export const getProfile = userId => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const profile = await axios.get(`${url}/${userId}`, config);
    const { data } = profile;
    const { user } = data;
    let dob = null;
    if (user.profile.dateOfBirth) {
      const dobArray = (user.profile.dateOfBirth).split('T');
      [dob] = dobArray;
    }

    const userDetails = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      bio: user.profile.bio,
      image: user.profile.image,
      username: user.userName,
      phoneNumber: user.profile.phoneNumber,
      socialMedia: [
        { name: 'facebook', url: user.profile.facebook },
        { name: 'twitter', url: user.profile.twitter },
        { name: 'linkedin', url: user.profile.linkedIn },
      ],
      DOB: dob,
      industry: user.profile.industry,
      yrsOfExperience: user.profile.yrsOfExperience,
      isEnrolled: user.profile.isEnrolled,
    };

    dispatch(getProfileSuccess(userDetails));
  } catch (error) {
    dispatch(getProfileFailed(error));
  }
};

export const uploadStart = () => ({
  type: actionCreators.UPLOAD_START,
});

export const uploadSuccess = imageUrl => ({
  type: actionCreators.UPLOAD_SUCCESS,
  imageUrl,
});

export const uploadFailed = error => ({
  type: actionCreators.UPLOAD_FAILED,
  error,
});

export const uploadImage = image => async (dispatch) => {
  dispatch(uploadStart());
  const config = {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: token,
    },
  };
  try {
    const data = new FormData();
    data.append('image', image);

    const upload = await axios.post('https://freyja-ah-backend.herokuapp.com/api/image', data, config);
    const imageUrl = upload.data.data;
    dispatch(uploadSuccess(imageUrl));
  } catch (error) {
    dispatch(uploadFailed(error.response.data));
  }
};

export const updateProfileFailed = error => ({
  type: actionCreators.UPDATE_PROFILE_FAILED,
  error,
});


export const updateProfile = data => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const profile = await axios.put(url, data, config);
    await dispatch(getProfile(profile.data.profile.userId));
  } catch (error) {
    dispatch(updateProfileFailed(error.response.data.error));
  }
};
