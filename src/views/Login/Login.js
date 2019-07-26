/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../assets/images/logo3.png';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Button from '../../components/Button';
import Input from '../../components/Inputs/Input';
import { loginUser } from '../../../store/actions/authActions';
import './login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationErrors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { validationErrors } = this.state;

    this.setState({
      [e.target.name]: e.target.value,
      validationErrors: {
        ...validationErrors,
        [e.target.name]: '',
      },
    });
  }

  validateFormInput() {
    const errors = {};
    const emailRegx = /^\S+@\S+\.[\w]+$/;

    Object.entries(this.state).forEach(([property, value]) => {
      const input = typeof value === 'string' ? value.trim() : '';

      switch (property) {
        case 'email':
          if (input.length === 0) {
            errors[property] = 'Email address is required';
          } else if (!emailRegx.test(input)) {
            errors[property] = 'Enter a valid email address';
          }
          break;
        case 'password':
          if (input.length === 0) {
            errors[property] = 'Password is required';
          }
          break;
        default:
          break;
      }
    });

    if (Object.keys(errors).length !== 0) {
      this.setState({
        validationErrors: { ...errors },
      });
      return false;
    }

    this.setState({
      validationErrors: {},
    });
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.auth.isLoading) return;

    if (this.validateFormInput()) {
      const userData = Object.entries(this.state).reduce((user, [property, input]) => {
        if (typeof input === 'string') {
          // eslint-disable-next-line no-param-reassign
          user[property] = input.trim();
        }
        return user;
      }, {});

      this.props.loginUser(userData);
    }
  }

  render() {
    const { isLoading, isAuthenticated, errors } = this.props.auth;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    const authError = errors.error || '';
    const { email, password } = this.state.validationErrors;

    return (
      <React.Fragment>
        <Navbar />
        <section className="l-container">
          <Card className="form-container">
            <Form onSubmit={this.handleSubmit} id="form">
              <div>
                <p className="logo">
                  <img src={Logo} alt="Logo" />
                </p>
                <h2 className="header"> LOGIN </h2>
                <span className="error" id="form-feedback">
                  {authError}
                </span>
              </div>

              <Input
                id="email-input"
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Enter Email"
              />
              <span className="error">{email || ''}</span>

              <Input
                id="password-input"
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Enter Password"
              />
              <span className="error">{password || ''}</span>

              <Button
                type="submit"
                classname="submit"
                text={isLoading ? 'Please wait..' : 'Submit'}
              />

              <p>
                <Link className="forgot-password" to="/password-reset">
                  Forgot Password?
                </Link>
              </p>
              <p>
                Dont have an account yet?
                <Link className="sign-up" to="/sign-up">
                  {' '}
                  Sign Up
                </Link>
              </p>
            </Form>
          </Card>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.shape({ error: PropTypes.string }),
  }),
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
