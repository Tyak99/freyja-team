import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends, faCertificate, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import Routes from './routes/routes';
import store from '../store/index';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


library.add(faUserFriends, faCertificate, faPeopleCarry);

const App = () => <Routes />;

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
