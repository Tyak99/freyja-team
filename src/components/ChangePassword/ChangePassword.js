import React, { Component } from 'react';
import { CardText, CardBody, CardSubtitle, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import queryString from 'query-string';
import propTypes from 'prop-types';
import './changePassword.scss';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../../store/actions/authActions/changePassword';
import Card from '../Card/Card';
import Button from '../Button';
import Input from '../Inputs/Input';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Heading } from '../Heading/Heading';

export class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      password: '',
      confirmPassword: '',
      error: '',
      passwordFieldError: '',
      confirmPasswordFieldError: '',
      success: '',
    };
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const { password, confirmPassword } = this.state;
    const { changePassword, history, location } = this.props;
    this.setState({
      passwordFieldError: '',
      confirmPasswordFieldError: '',
      error: '',
      success: '',
    });
    const pass = password.trim();
    const pass2 = confirmPassword.trim();
    if (pass === '') {
      this.setState({ passwordFieldError: 'password field cannot be empty' });
    } else if (pass === pass2) {
      const { token } = queryString.parse(location.search);
      await changePassword(pass, token, history);
      const { passwordChangeSuccess, passwordChangeError } = this.props;
      this.setState({
        error: passwordChangeError,
        password: '',
        confirmPassword: '',
        success: passwordChangeSuccess,
      });
    } else {
      this.setState({ confirmPasswordFieldError: 'password does not match' });
    }
  }

  render() {
    const { error, confirmPassword, password, passwordFieldError,
      confirmPasswordFieldError, success } = this.state;

    const { loading } = this.props;
    return (
      <div>
        <Header />
        <div className="containers">
          <div className="bg-image" />
          <Card>
            <CardBody>
              <CardSubtitle>
                <FontAwesomeIcon icon="lock" className="FontAwesomeIcon" />
              </CardSubtitle>
              <Heading title="Change Password" />
              <CardText>Enter a new password to change your password</CardText>
              <div className="error">{error}</div>
              <div className="success">{success}</div>
              <FormGroup>
                <Input
                  placeholder="Password"
                  className="input"
                  id="password"
                  onChange={e => this.handleInput(e)}
                  name="password"
                  value={password}
                  type="password"
                />
                <div className="error">{passwordFieldError}</div>
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Confirm Password"
                  className="input"
                  id="password2"
                  onChange={e => this.handleInput(e)}
                  name="confirmPassword"
                  value={confirmPassword}
                  type="password"
                />
                <div className="error">{confirmPasswordFieldError}</div>
              </FormGroup>
              <Button
                classname="buttons"
                type="button"
                onClick={this.handleSubmit}
                text={loading ? 'Loading...' : 'Change Password'}
              />
            </CardBody>
          </Card>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changePassword: actions.ChangePassword,
};

const mapStateToProps = state => ({
  passwordResetError: state.auth.passwordResetError,
  passwordResetSuccess: state.auth.passwordResetSuccess,
  loading: state.auth.isLoading,
  passwordChangeError: state.auth.passwordChangeError,
  passwordChangeSuccess: state.auth.passwordChangeSuccess,
});

ChangePassword.propTypes = {
  changePassword: propTypes.func,
  loading: propTypes.bool,
  passwordChangeSuccess: propTypes.string,
  passwordChangeError: propTypes.string,
  history: propTypes.shape({ push: propTypes.func }),
  location: propTypes.shape({ search: propTypes.string }),
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChangePassword));
