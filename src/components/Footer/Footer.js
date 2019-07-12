import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer className="footer-container">
    <nav>
      <ul className="footer-links">
        <Link className="flink" to="/about">
            About
        </Link>
        <span>|</span>
        <Link className="flink" to="how-it-work">
            How it works
        </Link>
        <span>|</span>
        <Link className="flink" to="contacts">
           Contact us
        </Link>
      </ul>
      <p className="rights">© CSLC 2019. All rights Reserved.</p>
    </nav>
  </footer>
);

export default Footer;
