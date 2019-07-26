/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  CardBody, CardTitle, Row, Col, CardSubtitle, CardText, Button,
} from 'reactstrap';
import { arrayOf, object } from 'prop-types';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
import './modules.scss';

const Modules = ({ modules }) => (
  <div className="m-container cd-view">
    <div className="m-intro">
      <h3>Modules</h3>
      <p>
      The course modules provide the essential materials,
      activities and games you will need to understand and improve your customer service skills.
      </p>
    </div>
    <Row>
      {!modules && (<Spinner />)}
      {modules && modules.map(mod => (
        <Col key={mod.id} sm={{ size: 'auto' }} className="m-col-adjust">

          <Card className="m-g-card">
            <Fragment>
              <Link to={`/view-module/${mod.id}`} className="m-card-link">
                <CardBody className="m-c-title">
                  <CardTitle className="m-title">
                    {mod.id}
                    {'. '}
                    {mod.name}
                  </CardTitle>
                  <CardSubtitle>Description</CardSubtitle>
                  <CardText className="t-d-text">
                    {mod.description}
                  </CardText>
                </CardBody>

              </Link>

              <CardBody className="t-link">
                <CardText>
                  <Link to={`/view-module/${mod.id}`}>View more </Link>
                </CardText>
              </CardBody>
            </Fragment>
          </Card>

        </Col>
      ))}
    </Row>
    <div className="take-course">
      <Button>
        Take Course
      </Button>
    </div>
  </div>
);

Modules.propTypes = {
  modules: arrayOf(object),
};
export default Modules;
