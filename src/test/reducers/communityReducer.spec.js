import reducer, { initialState } from '../../../store/reducers/community';


describe('reset password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle LOADING', () => {
    expect(reducer(
      initialState,
      {
        type: 'LOADING',
      },
    )).toMatchSnapshot();
  });
  it('should handleGET_COMMUNITY_MESSAGES', () => {
    expect(reducer(
      initialState,
      {
        type: 'GET_COMMUNITY_MESSAGES',
      },
    )).toMatchSnapshot();
  });
  it('should handle GET_COMMUNITY_MESSAGES_ERROR', () => {
    expect(reducer(
      initialState,
      {
        type: 'GET_COMMUNITY_MESSAGES_ERROR',
      },
    )).toMatchSnapshot();
  });
});
