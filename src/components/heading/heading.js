import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

export const Heading = ({ title }) => <h2 className="headsi">{title}</h2>;
Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Heading;
