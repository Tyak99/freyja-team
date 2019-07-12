import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> This is the Module pPage</h2>
    <Link to="/login"> Go to Login Page </Link>
    <br />
    <Link to="/signup"> Go to Signup Page </Link>
  </div>
);

export default Home;
