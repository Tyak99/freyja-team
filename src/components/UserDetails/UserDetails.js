import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import './userDetails.scss';
import Input from '../Inputs/Input';
import Button from '../Button';

const UserDetails = ({ profile, toggleEdit, isEdit, handleInput, submitProfile, error }) => {
  const getValue = value => profile[value] || 'Nil';
  const details = [
    { header: 'Username', value: 'username', type: 'text' },
    { header: 'Phone number', value: 'phoneNumber', type: 'text' },
    { header: 'Date of birth', value: 'DOB', type: 'date' },
    { header: 'Industry', value: 'industry', type: 'text' },
    { header: 'Years of experience', value: 'yrsOfExperience', type: 'text' },
  ];
  const socialMedia = [
    { header: 'Facebook', value: 'facebook', type: 'text' },
    { header: 'Twitter', value: 'twitter', type: 'text' },
    { header: 'LinkedIn', value: 'linkedIn', type: 'text' },
  ];
  return (
    <div className="jumbotron">
      <div className="details">
        <Row>
          <Col xs="10" />
          <Col xs="2">
            <FontAwesomeIcon icon="user-edit" onClick={() => toggleEdit()} className="f-font" />
          </Col>
        </Row>
        {details.map(detail => (
          <Row key={detail.value} className="userDetailsRow">
            <Col xs="6">
              <h4>
                {detail.header}
              </h4>
            </Col>
            <Col xs="6">
              <span className="userValues">
                {!isEdit
                  ? getValue(`${detail.value}`)
                  : (
                    <div className="edit-input">
                      <Input
                        type={detail.type}
                        value={getValue(`${detail.value}`)}
                        name={detail.value}
                        onChange={handleInput}
                        id={detail.value}
                      />
                      <span className="error">
                        {detail.value && error[detail.value]}
                      </span>
                    </div>
                  )
              }
              </span>
            </Col>
          </Row>
        ))}
        {isEdit && socialMedia.map(media => (
          <Row key={media.value} className="userDetailsRow">
            <Col xs="6">
              <h4>
                {media.header }
              </h4>
            </Col>
            <Col xs="6">
              <div className="edit-input">
                <Input
                  type={media.type}
                  placeholder="social media url"
                  name={media.value}
                  onChange={handleInput}
                />
                <span className="error">
                  {media.value && error[media.value]}
                </span>
              </div>
            </Col>
          </Row>
        ))}
        {isEdit && (
          <Row>
            <Col xs="6">
              <h4>
                Bio
              </h4>
            </Col>
            <Col xs="6">
              <textarea
                id="txtArea"
                rows="5"
                cols="42"
                onChange={handleInput}
                name="bio"
                defaultValue={getValue('bio')}
              />
            </Col>
          </Row>
        )}
        <Row className="userDetailsRow">
          <Col xs="6" />
          <Col xs="3">
            {isEdit && (
              <Button
                type="submit"
                text="Cancel"
                classname="btn-cancel"
                onClick={toggleEdit}
                id="cancel"
              />
            )}
          </Col>
          <Col xs="3">
            {isEdit && (
              <Button
                type="submit"
                text="Update"
                classname="btn-update"
                onClick={submitProfile}
                id="update"
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

UserDetails.defaultProps = {
  isEdit: false,
};
UserDetails.propTypes = {
  profile: PropTypes.shape({
    phoneNumber: PropTypes.string,
  }),
  toggleEdit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  submitProfile: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.string),
};
export default UserDetails;
