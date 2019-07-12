import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  auth: (state = { isAuthenticated: false }) => state,
});

export default (state, action) => appReducer(state, action);
