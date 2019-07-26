import { get } from 'axios';
import { GET_COMMUNITY_MESSAGES, GET_COMMUNITY_MESSAGES_ERROR, LOADING } from './types';

export const communityMessageSuccess = data => ({
  type: GET_COMMUNITY_MESSAGES,
  data,
});

export const communityMessageError = data => ({
  type: GET_COMMUNITY_MESSAGES_ERROR,
  data,
});

export const loading = () => ({
  type: LOADING,
});

export const getCommunityMessages = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await get('https://freyja-ah-backend.herokuapp.com/api/community/messages', {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });
    dispatch(communityMessageSuccess(response.data.data));
  } catch (error) {
    dispatch(communityMessageError('internal error'));
  }
};
