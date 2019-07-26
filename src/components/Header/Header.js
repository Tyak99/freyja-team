import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.scss';
import Button from '../Button';
import logo from '../../assets/images/logo.png';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isAuthenticated } = this.props;
    let display = (
      <NavItem>
        <Link to="/login">
          <Button type="button" text="Log in" classname="button-style" />
        </Link>
        <Link to="/signup">
          <Button type="button" text="SignIn" classname="button-style" />
        </Link>
      </NavItem>
    );
    if (isAuthenticated) {
      display = (
        <NavItem>
          <Link to="/profile">
            <Button type="button" text="Profile" classname="button-style" />
          </Link>
          <Link to="/logout">
            <Button type="button" text="Sign out" classname="button-style" />
          </Link>
        </NavItem>
      );
    }
    const { isOpen } = this.state;
    return (
      <header>
        <Navbar className="nav-style" light expand="md">
          <div>
            <Link to="/" className="nav-brand">
              <img src={logo} alt="logo" />
              CSLC
            </Link>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {display}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

Header.defaultProps = {
  isAuthenticated: false,
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Header);
