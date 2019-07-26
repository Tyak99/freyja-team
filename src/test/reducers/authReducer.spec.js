import authReducer from '../../../store/reducers/authReducer';
import { setCurrentUser } from '../../../store/actions/authActions';

let action;
let newState;

const initialState = {
  passwordResetError: '',
  passwordResetSuccess: '',
  passwordChangeError: '',
  passwordChangeSuccess: '',
  isLoading: false,
  isAuthenticated: false,
  user: {},
  errors: {},
  verified: '',
};

const newUser = {
  firstName: 'ochowo',
  lastName: 'haruna',
  userName: 'ooche',
  email: 'ochowoharuhhhnaa@gmail.com',
  password: 'passwordd',
  confirmPassword: 'passwordd',
};

describe('Auth Reducer', () => {
  it(' should return Initial state for undefined prop types', () => {
    expect(authReducer(undefined, { type: 'undefinedAction' })).toEqual({
      passwordResetError: '',
      passwordResetSuccess: '',
      passwordChangeError: '',
      passwordChangeSuccess: '',
      isLoading: false,
      isAuthenticated: false,
      user: {},
      errors: {},
      verified: '',
    });
  });
  it('should handle action type SET_CURRENT_USER', () => {
    action = setCurrentUser(newUser);
    newState = authReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
    expect(newState.user).not.toEqual(undefined);
    expect(newState.isAuthenticated).toEqual(true);
  });
});

describe('Auth Reducers', () => {
  it('should reurn initial state', () => {
    const newReduxState = authReducer(undefined, {});
    expect(newReduxState).toEqual(initialState);
  });

  it('should handle INIT_AUTH_REQUEST', () => {
    const newReduxState = authReducer(initialState, {
      type: 'INIT_AUTH_REQUEST',
    });

    expect(newReduxState).toEqual({ ...initialState, isLoading: true, errors: {} });
  });

  it('should handle END_AUTH_REQUEST', () => {
    const newReduxState = authReducer(initialState, {
      type: 'END_AUTH_REQUEST',
    });

    expect(newReduxState).toEqual({ ...initialState, isLoading: false });
  });

  it('should handle SET_CURRENT_USER', () => {
    const newReduxState = authReducer(initialState, {
      type: 'SET_CURRENT_USER',
      payload: { firstName: 'Chizzy' },
    });

    expect(newReduxState).toEqual({
      ...initialState,
      isAuthenticated: true,
      user: { firstName: 'Chizzy' },
    });
  });

  it('should handle LOGIN_ERROR', () => {
    const newReduxState = authReducer(initialState, {
      type: 'LOGIN_ERROR',
      payload: { error: 'Invalid login credentials' },
    });

    expect(newReduxState).toEqual({
      ...initialState,
      errors: { error: 'Invalid login credentials' },
    });
  });
});
