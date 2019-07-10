import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { loginUser } from '../../store/actions/authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;

  const userData = {
    email: 'davidchizindu@gmail.com',
    password: '11111111',
  };

  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('Logs in a user', () => {
    nock('https://localhost:3000')
      .post('/api/users', userData)
      .reply();

    return store.dispatch(loginUser(userData))
      .then(() => {
        const expectedActions = ['INIT_AUTH_REQUEST', 'END_AUTH_REQUEST', 'SET_CURRENT_USER'];

        const dispatchedAction = store.getActions();
        const actionTypes = dispatchedAction.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
  });

  it('Logs in a user', () => {
    nock('https://localhost:3000')
      .post('/api/users', {})
      .replyWithError();

    return store.dispatch(loginUser({}))
      .catch(() => {
        const expectedActions = ['END_AUTH_REQUEST', 'LOGIN_ERROR'];

        const dispatchedAction = store.getActions();
        const actionTypes = dispatchedAction.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
  });


});
