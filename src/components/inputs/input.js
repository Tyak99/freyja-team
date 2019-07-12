import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './inputs.scss';

const InputField = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  id,
}) => (
  <Fragment>
    <input
      id={id}
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </Fragment>
);
InputField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  type: 'text',

};

export default InputField;
