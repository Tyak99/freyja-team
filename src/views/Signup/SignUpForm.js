import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo3.png';
import { Heading } from '../../components/Heading/heading';
import Navbar from '../../components/Header/Header';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/index';
import './SignUp.scss';

const SignUpForm = ({ onSubmit, onChange, authError, valError }) => (
  <Fragment>
    <section className="sec-signup">
      <Navbar className="navbar" />
      <div className="container-s">
        <Card className="signup-box card-body">
          <form className="sign-form" onSubmit={onSubmit}>
            <img src={Logo} alt="Logo" />
            <Heading title="CREATE AN ACCOUNT" />
            <div className="inf">
              <Input
                id="firstname"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={onChange}
              />
              {valError && <div className="feedback">{valError.firstName}</div>}
            </div>
            <div className="inf">
              <Input
                id="lastname"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={onChange}
              />
              {valError && <div className="feedback">{valError.lastName}</div>}
            </div>
            <div className="inf">
              <Input
                id="username"
                type="text"
                placeholder="Username"
                name="userName"
                onChange={onChange}
              />
            </div>
            <div className="inf">
              <Input id="email" type="email" placeholder="Email" name="email" onChange={onChange} />
              {valError && <div className="feedback">{valError.email}</div>}
              {authError && <div className="feedback">{authError}</div>}
            </div>
            <div className="inf">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
              />
              {valError && <div className="feedback">{valError.password}</div>}
            </div>
            <div className="inf">
              <Input
                id="cpassword"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={onChange}
              />
              {' '}
              {valError && <div className="feedback">{valError.confirmPassword}</div>}
            </div>
            <Button text="Sign up" />
          </form>
          <div className="btm">
            <Link to="/signup" className="acct">
              {' '}
              Already have an account
              {' '}
            </Link>
            <br />

            <Link to="/module" className="soc-media">
              Register with Social media
              {' '}
            </Link>
            <br />
            <div>
              <Link to="/signup" className="font">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="icon alt" />
              </Link>
              <Link to="/signup" className="font mid">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon alt" />
              </Link>
              <Link to="/signup" className="font">
                <FontAwesomeIcon icon={['fab', 'google']} className="icon alt" />
              </Link>
            </div>
          </div>
          <CardBody />
        </Card>
      </div>
    </section>
  </Fragment>
);
SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  valError: PropTypes.object,
  authError: PropTypes.string,
};
export default SignUpForm;
