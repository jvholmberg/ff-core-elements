import React from 'react';

export const Button = ({ type, size, className, children, ...props }) =>
  <button className={`btn ${type} ${size} ${className}`} {...props}>{children}</button>;
