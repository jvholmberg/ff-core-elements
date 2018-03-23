import React from 'react';

const Button = ({ type, size, className, children, ...props }) => (
  <button className={`btn ${type} ${size} ${className}`} {...props}>
    {children}
  </button>
);
export default Button;
