/* eslint-disable arrow-parens */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import 'regenerator-runtime';
import { getModules } from '../../../store/actions/moduleActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('moduleAction', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    // clear all HTTP mocks after each test
    nock.cleanAll();
  });

  it('should get all modules', async done => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .get('/api/modules')
      .reply(200, {
        module: [],
      });
    await store.dispatch(getModules()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
});
