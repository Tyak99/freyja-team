/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import ModuleSidebar from '../../components/ModuleSidebar';
import ContentList from '../../components/ContentList/ContentList';
import Spinner from '../../components/Spinner/Spinner';
import Navbar from '../../components/Header/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';
import { getModule } from '../../../store/actions/moduleActions';
import './view-module.scss';

export class ViewModule extends Component {
  componentDidMount() {
    const { moduleId } = this.props.match.params;
    this.props.getModule(moduleId);
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    const { id, name, description, contents } = this.props.singleModule;

    return (
      <React.Fragment>
        <Navbar />
        <Container className="v-container" fluid>
          <Row className="m-row">
            <Col className="v-sidebar" sm="2">
              <ModuleSidebar />
            </Col>

            <Col sm="10">
              <main className="module-main">
                { this.props.isLoading ? <div className="loader"><Spinner /></div> : ''}
                {this.props.isLoading ? ''
                  : (
                    <React.Fragment>
                      <div className="module-header">
                        <h2>{name}</h2>
                        <p className="module-description">
                          {description}
                        </p>
                      </div>

                      <div className="module-content">
                        <p className="content-header">Content</p>

                        <div className="module-content-items">
                          {contents && <ContentList contents={contents} />}
                        </div>
                      </div>

                      <Link to={`/test/${id}`}>
                        <Button
                          type="button"
                          classname="test-button"
                          text="Take Test"
                        />
                      </Link>
                    </React.Fragment>
                  )
                }
              </main>
            </Col>
          </Row>

        </Container>
        <Footer />
      </React.Fragment>

    );
  }
}

ViewModule.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleId: PropTypes.string.isRequired,
    }),
  }),
  isAuthenticated: PropTypes.bool,
  singleModule: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    contents: PropTypes.array,
  }),
  isLoading: PropTypes.bool.isRequired,
  getModule: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  singleModule: state.modules.singleModule,
  isLoading: state.modules.isLoading,
});

const mapDispatchToProps = {
  getModule,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModule);
