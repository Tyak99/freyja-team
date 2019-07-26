import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  ResetPassword,
  loading,
  passwordResetSuccess,
  passwordResetError,
} from '../../../../store/actions/authActions/resetPassword';
import {
  ChangePassword,
  passwordChangeSuccess,
  passwordChangeError,
} from '../../../../store/actions/authActions/changePassword';
import { verifyAuthUser, verifyUser } from '../../../../store/actions/authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates PASSWORD_RESET_SUCCESS', () => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .post('/api/users/reset')
      .reply(200, { message: 'Please check your email' });

    return store.dispatch(ResetPassword('mattimobolaji@gmail.com')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('creates PASSWORD_RESET_ERROR', () => {
    nock('https://freyja-ah-backend.herokuapp.com').post('/api/users/reset').reply(401, { error: 'invalid email' });

    return store.dispatch(ResetPassword('mattimobolaji@gmail.commm')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('creates PASSWORD_CHANGE_SUCCESS when', () => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .post('api/users/change-password?token=amdacsdacmmaddd')
      .reply(200, { message: 'password updated successfully' });

    return store.dispatch(ChangePassword('december', 'cadjsdasscdadadsds')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('verifies user', () => {
    nock('https://freyja-ah-backend.herokuapp.com').get('api/user/verify/jdkkdkkd').reply(200, {});

    return store.dispatch(verifyAuthUser('dnsanda')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('update verified state', () => {
    store.dispatch(verifyUser(true));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates CHANGE_PASSWORD_SUCCESS when change password action is successful', () => {
    store.dispatch(passwordChangeSuccess('password successfully update'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates CHANGE_PASSWORD_ERROR when change password action is not successful', () => {
    store.dispatch(passwordChangeError('sorry, check the link again'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates PASSWORD_RESET_SUCCESS when reset password action is successful', () => {
    store.dispatch(passwordResetSuccess('Please check your email'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates PASSWORD_RESET_ERROR when reset password action is not successful', () => {
    store.dispatch(passwordResetError('invalid Email'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('updates loading to true in state', () => {
    store.dispatch(loading());
    expect(store.getActions()).toMatchSnapshot();
  });
});
