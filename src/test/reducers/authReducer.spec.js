import authReducer from '../../store/reducers/authReducer';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
  errors: {},
};

describe('Auth Reducers', () => {
  it('should reurn initial state', () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle INIT_AUTH_REQUEST', () => {
    const newState = authReducer(initialState, {
      type: 'INIT_AUTH_REQUEST',
    });

    expect(newState).toEqual({ ...initialState, isLoading: true, errors: {} });
  });

  it('should handle END_AUTH_REQUEST', () => {
    const newState = authReducer(initialState, {
      type: 'END_AUTH_REQUEST',
    });

    expect(newState).toEqual({ ...initialState, isLoading: false });
  });

  it('should handle SET_CURRENT_USER', () => {
    const newState = authReducer(initialState, {
      type: 'SET_CURRENT_USER',
      payload: { firstName: 'Chizzy' },
    });

    expect(newState).toEqual({
      ...initialState,
      isAuthenticated: true,
      user: { firstName: 'Chizzy' },
    });
  });

  it('should handle LOGIN_ERROR', () => {
    const newState = authReducer(initialState, {
      type: 'LOGIN_ERROR',
      payload: { error: 'Invalid login credentials' },
    });

    expect(newState).toEqual({
      ...initialState,
      errors: { error: 'Invalid login credentials' },
    });
  });
});
