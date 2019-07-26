import React, { Component } from 'react';
import { CardText, CardBody, CardSubtitle, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';
import './resetpassword.scss';
import * as actions from '../../../store/actions/authActions/resetPassword';
import Card from '../Card/Card';
import Button from '../Button';
import Input from '../Inputs/Input';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Heading } from '../Heading/Heading';

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
    const { ResetPassword, history } = this.props;
    const { email } = this.state;
    ResetPassword(email, history);
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
              <FontAwesomeIcon icon="lock" className="FontAwesomeIcon" />
            </CardSubtitle>
            <Heading title="Forgot Password?" />
            <CardText>
              Please enter your email to reset your password
            </CardText>
            <div className="success">{passwordResetSuccess}</div>
            <FormGroup>
              <Input placeholder="Email" id="email" onChange={e => this.handleEmail(e)} />
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
  ResetPassword: actions.ResetPassword,
};

const mapStateToProps = state => ({
  passwordResetError: state.auth.passwordResetError,
  passwordResetSuccess: state.auth.passwordResetSuccess,
  loading: state.auth.isLoading,
});

ResetPasswordCard.propTypes = {
  ResetPassword: propTypes.func,
  history: propTypes.string,
  loading: propTypes.bool,
  passwordResetError: propTypes.string,
  passwordResetSuccess: propTypes.string,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordCard);
