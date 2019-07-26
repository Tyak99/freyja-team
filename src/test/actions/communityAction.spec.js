import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../../store/actions/community';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('test community action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('successfully get all community messages', () => {
    nock('https://freyja-ah-backend.herokuapp.com').get('/api/community/messages').reply(200, {});

    return store.dispatch(actions.getCommunityMessages()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('return error while trying to get community messages', () => {
    nock('https://freyja-ah-backend.herokuapp.com').get('/api/community/messag').reply(200, {});

    return store.dispatch(actions.getCommunityMessages()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
