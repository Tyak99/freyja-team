import React, { PureComponent } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CardBody, CardText } from 'reactstrap';
import propTypes from 'prop-types';
import Card from '../Card/Card';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';
import * as actions from '../../../store/actions/authActions';
import { Heading } from '../Heading/Heading';
import './VerifyUser.scss';

export class VerifyUser extends PureComponent {
  state = {
    verify: 'verifying, ...',
  };

  componentDidMount() {
    const verifyUsers = async () => {
      const { verifyAuth, history, location } = this.props;
      const { token } = queryString.parse(location.search);

      await verifyAuth(token, history);
      const { verified } = this.props;
      this.setState({
        verify: verified,
      });
    };

    verifyUsers();
  }

  render() {
    const { verify } = this.state;
    const top = verify.split(',')[0];
    const buttom = verify.split(',')[1];
    return (
      <div className="containers">
        <div className="bg-image" />
        <Header />
        <Card>
          <CardBody className="verified">
            <Heading title={top} />
            <CardText>{buttom}</CardText>
          </CardBody>
        </Card>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  verified: state.auth.verified,
  loading: state.auth.isLoading,
});

const mapDispatchToProps = {
  verifyAuth: actions.verifyAuthUser,
};

VerifyUser.propTypes = {
  history: propTypes.shape({ push: propTypes.func }),
  verifyAuth: propTypes.func,
  location: propTypes.shape({ search: propTypes.string }),
  verified: propTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VerifyUser));
