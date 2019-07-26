/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import { func, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modules from '../../components/Modules/Modules';
import Sidebar from '../../components/Sidebar/Sidebar';
import { getModules } from '../../../store/actions/moduleActions';
import './dashboard.scss';
import sideLogo from '../../assets/images/logo.png';

/**
 * @class SignUp
 * @description SignUp component
 * @param {object} event - Synthetic event object
 */
export class Dashboard extends Component {
  componentDidMount() {
    const { getCourseModules } = this.props;
    getCourseModules();
  }

  render() {
    const { allModules } = this.props;
    return (
      <Fragment>
        <main className="d-container">
          <NavBar />
          <div className="d-row">
            <Row className="s-row">
              <Col sm="2" className="d-sidebar">
                <Sidebar>
                  <div className="d-aside">
                    <div>
                      <span className="d-logo">
                        <img src={sideLogo} alt="logo" />
                        Community
                      </span>
                    </div>
                    <ul className="d-links">
                      <li className="module-active"><Link to="/dashboard">Modules</Link></li>
                      <li><Link to="/profile">Profile</Link></li>
                      <li><Link to="/payment">Payment</Link></li>
                      <li><Link to="/aboutus">Help</Link></li>
                    </ul>
                  </div>
                </Sidebar>
              </Col>
              <Col sm="10" className="m-main">
                <Modules modules={allModules} />
              </Col>
            </Row>
          </div>
          <div className="footer-div d-footer">
            <Footer />
          </div>
        </main>

      </Fragment>
    );
  }
}

/**
 * @method mapDispatchToProps
 * @description maps redux actions to props
 * @param {callback} dispatch destructured reducer state object
 * @returns {object} state
 */
export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getCourseModules: getModules,
  },
  dispatch,
);

/**
 * @method mapStateToProps
 * @description maps reducer states to props
 * @param {object} * destructured reducer state object
 * @returns {object} state
 */
export const mapStateToProps = ({ modules }) => {
  const {
    allModules,
    errors,
  } = modules;
  return {
    allModules,
    errors,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Dashboard));

Dashboard.propTypes = {
  getCourseModules: func.isRequired,
  allModules: arrayOf(object),
};
