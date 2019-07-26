import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import './inputs.scss';

const InputField = ({ id, type, placeholder, name, onChange, value }) => (
  <Fragment>
    <input
      id={id}
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      defaultValue={value}
      onChange={onChange}
    />
  </Fragment>
);
InputField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  type: 'text',
};
export default InputField;
