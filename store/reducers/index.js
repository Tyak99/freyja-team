import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import authReducer from './authReducer';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  auth: authReducer,
});

export default (state, action) => appReducer(state, action);
