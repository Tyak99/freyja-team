import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './footer.scss';

const Footer = () => (
  <footer className="footer-container">
    <nav>
      <ul className="footer-links">
        <HashLink className="flink" to="/aboutus/#sec-abt">
          About
        </HashLink>
        <span>|</span>
        <HashLink className="flink" to="/aboutus/#sect-wrks">
          How it works
        </HashLink>
        <span>|</span>
        <HashLink className="flink" to="/aboutus/#nbg-t">
          Contact us
        </HashLink>
      </ul>
      <p className="rights">© CSLC 2019. All rights Reserved.</p>
    </nav>
  </footer>
);

export default Footer;
