import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import profile from './profile';
import authReducer from './authReducer';
import modulesReducer from './modulesReducer';
import communityM from './community';
import testreducer from './testReducer';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  auth: authReducer,
  profile,
  modules: modulesReducer,
  community: communityM,
  test: testreducer,
});

export default (state, action) => appReducer(state, action);
