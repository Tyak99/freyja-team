import reducer, { initialState } from '../../../store/reducers/authReducer';


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
  it('should handle PASSWORD_RESET_ERROR', () => {
    expect(reducer(
      initialState,
      {
        type: 'PASSWORD_RESET_ERROR',
      },
    )).toMatchSnapshot();
  });
  it('should handle PASSWORD_RESET_SUCCESS', () => {
    expect(reducer(
      initialState,
      {
        type: 'PASSWORD_RESET_SUCCESS',
      },
    )).toMatchSnapshot();
  });
  it('should handle PASSWORD_CHANGE_ERROR', () => {
    expect(reducer(
      initialState,
      {
        type: 'PASSWORD_CHANGE_ERROR',
      },
    )).toMatchSnapshot();
  });
  it('should handle PASSWORD_CHANGE_SUCCESS', () => {
    expect(reducer(
      initialState,
      {
        type: 'PASSWORD_CHANGE_SUCCESS',
      },
    )).toMatchSnapshot();
  });
  it('should handle ERROR', () => {
    expect(reducer(
      initialState,
      {
        type: 'GET_ERRORS',
      },
    )).toMatchSnapshot();
  });
  it('should handle PASSWORD_CHANGE_ERROR', () => {
    expect(reducer(
      initialState,
      {
        type: 'PASSWORD_CHANGE_ERROR',
      },
    )).toMatchSnapshot();
  });
  it('should handle PASSWORD_CHANGE_SUCCESS', () => {
    expect(reducer(
      initialState,
      {
        type: 'PASSWORD_CHANGE_SUCCESS',
      },
    )).toMatchSnapshot();
  });
  it('should handle ERROR', () => {
    expect(reducer(
      initialState,
      {
        type: 'GET_ERRORS',
      },
    )).toMatchSnapshot();
  });
});
