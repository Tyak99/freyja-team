/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo3.png';
import { Heading } from '../../components/Heading/Heading';
import Navbar from '../../components/Header/Header';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/index';
import './signUp.scss';

const SignUpForm = ({
  onSubmit, onChange, authError, valError, socialAuthPath,
}) => (
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
              {valError && <div className="feedback">{valError.confirmPassword}</div>}
            </div>
            <Button text="Sign up" />
          </form>
          <div className="btm">
            <br />
            <p className="acct">
              Already have an account?
              <Link className="sign-up" to="/login">
                {' '}
                login
              </Link>
            </p>

            <p className="acct">
              Register with Social media account
            </p>
            <div>
              <a
                role="button"
                tabIndex={0}
                className="font"
                onClick={() => socialAuthPath('twitter')}
              >
                <FontAwesomeIcon icon={['fab', 'twitter']} className="icon alt" />
              </a>
              <a
                role="button"
                tabIndex={0}
                onClick={() => socialAuthPath('facebook')}
                className="font mid"
              >
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon alt" />
              </a>
              <a
                role="button"
                tabIndex={0}
                className="font"
                onClick={() => socialAuthPath('google')}
              >
                <FontAwesomeIcon icon={['fab', 'google']} className="icon alt" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  </Fragment>
);
SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  socialAuthPath: PropTypes.func.isRequired,
  valError: PropTypes.shape({
    status: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }),
  authError: PropTypes.string,
};
export default (SignUpForm);
