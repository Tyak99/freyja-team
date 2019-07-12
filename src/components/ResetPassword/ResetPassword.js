
import React, { Component } from 'react';
import {
  CardText, CardBody, CardTitle, CardSubtitle, FormGroup,
} from 'reactstrap';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './resetpassword.scss';
import { ResetPassword } from '../../../store/actions/authActions/resetPassword';
import Card from '../Card/card';
import Button from '../Button';
import Input from '../inputs/input';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
/**
 * @description
 * @param
 * @returns
 */
export class ResetPasswordCard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.state = {
      email: '',
    };
  }


  handleEmail(e) {
    const { value } = e.target;
    this.setState({ email: value });
  }

  handleSubmit() {
    const { history } = this.props;
    const { email } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.ResetPassword(email, history);
  }

  render() {
    const { passwordResetSuccess, passwordResetError, loading } = this.props;
    return (
      <div className="containers">
        <div className="bg-image" />
        <Header />
        <Card>
          <CardBody>
            <CardSubtitle>
              <i className="fas fa-lock" />
            </CardSubtitle>
            <CardTitle className="forgot"> Forgot Password? </CardTitle>
            <CardText>
             Please enter your email address here and we will send you information to change your
             password
            </CardText>
            <div className="success">{passwordResetSuccess}</div>
            <FormGroup>
              <Input
                placeholder="Email"
                id="email"
                onChange={e => this.handleEmail(e)}
              />
              <div className="error">{passwordResetError}</div>
            </FormGroup>
            <Button
              classname="buttons"
              type="button"
              onClick={e => this.handleSubmit(e)}
              text={loading === true ? 'Loading...' : 'Reset Password'}
            />
          </CardBody>
        </Card>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  ResetPassword,
};

const mapStateToProps = state => ({
  passwordResetError: state.auth.passwordResetError,
  passwordResetSuccess: state.auth.passwordResetSuccess,
  loading: state.auth.isloading,
});

ResetPasswordCard.propTypes = {
  ResetPassword: propTypes.func,
  history: propTypes.string,
  loading: propTypes.bool,
  passwordResetError: propTypes.string,
  passwordResetSuccess: propTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordCard);
