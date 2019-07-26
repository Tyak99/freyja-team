import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import profile from './profile';
import authReducer from './authReducer';
import modulesReducer from './modulesReducer';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  auth: authReducer,
  profile,
  modules: modulesReducer,
});

export default (state, action) => appReducer(state, action);
