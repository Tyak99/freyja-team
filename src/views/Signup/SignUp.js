import React, { Fragment } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { registerUser } from '../../../store/actions/authActions';
import { socialAuthPath, socialAuth, getToken } from '../../../store/actions/authActions/socialAuthActions';
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

  componentDidMount() {
    const { location, socialSignOn } = this.props;
    const tokenString = location && location.search;
    if (tokenString) {
      const token = getToken(tokenString);
      socialSignOn(token);
    }
  }

  onChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    } = this.state;
    const { history, registerAction } = this.props;
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    };
    registerAction(newUser, history);
  }

  render() {
    const { auth } = this.props;
    const { isAuthenticated, errors } = auth;
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

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
          socialAuthPath={socialAuthPath}
        />
        <Footer />
      </Fragment>
    );
  }
}

SignUp.propTypes = {
  socialSignOn: PropTypes.func.isRequired,
  registerAction: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    root: PropTypes.string,
    errors: PropTypes.any,
    isAuthenticated: PropTypes.bool,
  }),
  history: PropTypes.shape({ root: PropTypes.string }),
  location: PropTypes.shape({ search: PropTypes.string }),
};
const mapStateToProps = state => ({
  auth: state.auth,
});

/**
 * @method mapDispatchToProps
 * @description maps redux actions to props
 * @param {callback} dispatch destructured reducer state object
 * @returns {object} state
 */
export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    registerAction: registerUser,
    socialSignOn: socialAuth,
  },
  dispatch,
);

const signUpPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SignUp));
export default signUpPage;
export { SignUp };
