import React from 'react';

export const Modal = ({ type, size, className, children, ...props }) =>
  <button className={`btn ${type} ${size} ${className}`} {...props}>{children}</button>;
