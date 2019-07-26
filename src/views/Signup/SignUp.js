import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { registerUser } from '../../../store/actions/authActions';
import Footer from '../../components/Footer/Footer';
import SignUpForm from './SignUpForm';
import './signUp.scss';
import validateSignupInput from '../../validations/validateSignupInput';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  onChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    const { firstName, lastName, userName, email, password, confirmPassword } = this.state;
    const { history } = this.props;
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    };
    this.props.registerUser(newUser, history);
  }

  render() {
    let valError;
    let authError;
    const { firstName, lastName, userName, email, password, confirmPassword } = this.state;
    const newUser = {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    };

    const { auth } = this.props;
    const { errors } = auth;
    if (errors && !(Object.keys(errors).length === 0 && errors.constructor === Object)) {
      const { validationErrors, isValid } = validateSignupInput(newUser);
      if (typeof errors === 'string') {
        authError = errors;
      } else if (typeof errors === 'object') {
        if (!isValid) {
          valError = validationErrors;
        }
      }
    }
    return (
      <Fragment>
        <SignUpForm
          onSubmit={e => this.onSubmit(e)}
          onChange={e => this.onChange(e)}
          valError={valError}
          authError={authError}
        />
        <Footer />
      </Fragment>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    root: PropTypes.string,
    errors: PropTypes.any,
  }),
  history: PropTypes.shape({ root: PropTypes.string }),
};
const mapStateToProps = state => ({
  auth: state.auth,
});

const signUpPage = connect(
  mapStateToProps,
  { registerUser },
)(withRouter(SignUp));
export default signUpPage;
export { SignUp };
