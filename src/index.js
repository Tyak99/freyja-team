import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  faCheckSquare, faPen, faUserEdit, faCamera, faUserFriends, faCertificate, faPeopleCarry, faLock,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import store from '../store/index';
import Routes from './routes/routes';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from '../store/actions/authActions';
import './style.css';


library.add(
  fab, faCheckSquare, faPen, faUserEdit, faCamera,
  faUserFriends, faCertificate, faPeopleCarry, faLock,
);
const App = () => <Routes />;

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwtDecode(localStorage.token);
  store.dispatch(setCurrentUser(decoded));
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
