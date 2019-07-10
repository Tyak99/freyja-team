import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends, faCertificate, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
=======
import jwtDecode from 'jwt-decode';
>>>>>>> Add tests for login component [delivers 166236212]
import store from './store';
import setAuthToken from './utils/setAuthToken';
import Routes from './routes/routes';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { setCurrentUser } from './store/actions/authActions';
>>>>>>> Add tests for login component [delivers 166236212]
import './style.css';


library.add(faUserFriends, faCertificate, faPeopleCarry);

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
