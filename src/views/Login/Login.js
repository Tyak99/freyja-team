import React, { Component } from 'react'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../store/actions/authActions';
import './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    validationErrors: {}
  } 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateFormInput = () => {
    let errors = {};
    const emailRegx = /^\S+@\S+\.[\w]+$/;

    Object.entries(this.state).forEach(([property, value]) => {
      const input = typeof value === 'string' ? value.trim() : '';

      switch(property) {
        case 'email':
          if (input.length === 0) {
            errors[property] = 'Email address is required'
          }
          else if (!emailRegx.test(input)) {
            errors[property] = 'Enter a valid email address'
          }
          break;
        case 'password':
          if (input.length === 0) {
            errors[property] = 'Password is required'
          }
          break;
        default:
          break;
      }
    });

    if (Object.keys(errors).length !== 0) {
      this.setState({ validationErrors: {...errors} })
      return false;
    } else {
      this.setState({ validationErrors: {} })
      return true;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateFormInput()) {

      const userData = Object.entries(this.state).reduce(
        (user, [property, input]) => {
          if (typeof input === 'string') {
            user[property] = input.trim();
          }
          return user;
        }, {})
      
      this.props.loginUser(userData);
    }
  }

  render() {
    const { isAuthenticated, isLoading, errors } = this.props.auth;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />
    }

    const authError = errors.error === undefined || errors.error === '' ? '' : errors.error;
    const { email, password } = this.state.validationErrors;

    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <section className="container">
          <Card className="form-container">
            <Form onSubmit={this.handleSubmit} id="form">

              <div>
                <h2 className="header"> Login </h2>
                <span className="error" id="form-feedback">{authError}</span>
              </div>

              <FormGroup>
                <Label for="email" className="label">Email</Label>
                <Input onChange={this.handleChange} type="email" name="email" placeholder="Enter Email" />
                <span className="error">{email ? email : ''}</span>
              </FormGroup>

              <FormGroup>
                <Label for="password" className="label">Password</Label>
                <Input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                <span className="error">{password ? password : ''}</span>
              </FormGroup>

              <Button type="submit" id="submit">Submit</Button>
              <p><Link className="forgot-password" to="/password-reset">Forgot Password?</Link></p>  
              <p>Dont have an account yet? <Link className="sign-up" to="/sign-up">Sign Up</Link></p>
            </Form>

          </Card>
      </section>
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  loginUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
