// Button.js
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, link, className, ...rest }) => {
  return (
    <Link to={link} className={`block border h-16 rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white  font-montserrat text-h3  text-center mt-4 w-full  pt-5 backdrop:tracking-wider ${className}`} {...rest}>
      {text}
    </Link>
  );
};

export default Button;
