import React from 'react';
import { Link } from 'react-router-dom';
import sideLogo from '../../assets/images/logo.png';
import './moduleSidebar.scss';

const ModuleSidebar = () => (
  <aside className="m-aside">
    <div className="d-aside">
      <div>
        <span className="d-logo">
          <img src={sideLogo} alt="logo" />
        Community
        </span>
      </div>
      <ul className="d-links">
        <li className="module-active"><Link to="/dashboard">Modules</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/aboutus">Help</Link></li>
      </ul>
    </div>
  </aside>
);

export default ModuleSidebar;
