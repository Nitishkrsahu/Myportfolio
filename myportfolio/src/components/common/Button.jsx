import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, link, variant = 'primary' }) => {
  const variantClasses = {
    primary: 'btn-primary',
    warning: 'btn-warning',
    'outline-light': 'btn-outline-light',
    'outline-dark': 'btn-outline-dark'
  };

  return (
    <Link 
      to={link} 
      className={`btn ${variantClasses[variant] || 'btn-primary'}`}
    >
      {text}
    </Link>
  );
};

export default Button;