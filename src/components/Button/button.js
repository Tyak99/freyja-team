import React from 'react';
import PropTypes from 'prop-types';
import { Button as ReactStrapBtn } from 'reactstrap';
import './button.scss';

const Button = ({ type, text, onClick, classname }) => (
  <ReactStrapBtn
    className={classname}
    type={type}
    onClick={onClick}
  >
    {text}
  </ReactStrapBtn>
);

Button.propTypes = {
  type: PropTypes.string,
  classname: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'submit',
  classname: 'b-button',
};

export default Button;
