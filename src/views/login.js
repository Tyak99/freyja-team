import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';

const Login = () => (
  <div>
    <Header />
    <h2> This is the login page</h2>
    <Link to="/"> Go back home </Link>
  </div>
);

export default Login;
