import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { getProfile, getProfileSuccess, uploadSuccess, uploadFailed, updateProfileFailed, updateProfile } from '../../../store/actions/profile';
import profileReducer, { initialState } from '../../../store/reducers/profile';

const token = 'token';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockProfile = {
  data: {
    id: 1,
    phoneNumber: 3223232,
    dateOfBirth: '12/12/12',
    isEmployed: true,
    yrsOfExperience: 4,
    industry: 'Andela',
    image: 'http://',
    isCertified: false,
  },
};

describe('action creators', () => {
  const store = mockStore({});

  it('calls PROFILE_SUCCESS when getProfile is successful', (done) => {
    store.dispatch(getProfileSuccess(mockProfile));
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
});
describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    // clear all HTTP mocks after each test
    nock.cleanAll();
  });
  it('should create getProfileSuccess when profile has been gotten', (done) => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .get('/api/profiles/4') // Route to catch and mock
      .reply(200, {
        user: {
          userId: 4,
          id: 1,
          firstName: 'John',
          lastName: 'Grisham',
          userName: 'Tyak',
          profile: {
            age: 40,
            phoneNumber: 7689567890,
            bio: 'Help me',
          },
        },
      });
    return store.dispatch(getProfile(4, token)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
  it('should dispatch getProfileFailed when getProfile fails', (done) => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .get('/api/profiles/99') // Route to catch and mock
      .reply(404, { error: 'user does not exist' });
    return store.dispatch(getProfile(4, token)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
  it('should dispatch updateProfile', (done) => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .put('/api/profiles', { industry: 'Andela' })
      .reply(201, { profile: { userId: 45 } });
    return store.dispatch(updateProfile({ industry: 'Andela' })).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
  it('should dispatch update profile failed', (done) => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .put('/api/profiles', { dateOfBirth: '10-12' })
      .reply(422, { error: 'invalid date of birth' });
    return store.dispatch(updateProfile({ dateOfBirth: '10-12' })).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
});

describe('profile actions', () => {
  const store = mockStore({});
  it('dispatch UPLOAD_SUCCESS with image url', (done) => {
    store.dispatch(uploadSuccess('http//'));
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
  it('dispatch UPLOAD_FAILED with error object', (done) => {
    store.dispatch(uploadFailed({ error: 'unable to upload image' }));
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
  it('dispatch updateProfileFailed with error object', (done) => {
    store.dispatch(updateProfileFailed({ error: 'invalie information' }));
    expect(store.getActions()).toMatchSnapshot();
    done();
  });
});

describe('profile reducer', () => {
  it('should test the initial state', () => {
    expect(profileReducer(undefined, {})).toMatchSnapshot();
  });
  it('should test the state for update when get profile fails', () => {
    expect(profileReducer(initialState, { type: 'GET_PROFILE_FAILED' })).toMatchSnapshot();
  });
  it('should test the state for update when get profile success', () => {
    expect(profileReducer(initialState, { type: 'GET_PROFILE_SUCCESS' })).toMatchSnapshot();
  });
  it('should test the state for update when upload image success', (done) => {
    expect(profileReducer(initialState, { type: 'UPLOAD_SUCCESS' })).toMatchSnapshot();
    done();
  });
  it('should test the state for update when upload image failed', (done) => {
    expect(profileReducer(initialState, { type: 'UPLOAD_FAILED' })).toMatchSnapshot();
    done();
  });
  it('should test the state for update when upload image failed', (done) => {
    expect(profileReducer(initialState, { type: 'UPLOAD_START' })).toMatchSnapshot();
    done();
  });
});
