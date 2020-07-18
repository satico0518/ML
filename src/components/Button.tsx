import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }: { text: string }) => <div className='custom-button'>{text}</div>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
