import React, { Fragment } from 'react';
import { FormGroup, Input } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './inputs.scss';

const InputField = ({
  type,
  placeholder,
  name,
  displayError,
  onChange,
  value,
}) => (
  <Fragment>
    <FormGroup className="inf">
      <Input
        className={classnames('input firstname', {
          'is-invalid': { displayError },
        })}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  </Fragment>
);
InputField.propTypes = {
  displayError: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  type: 'text',
};
export default InputField;
