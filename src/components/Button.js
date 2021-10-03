import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button className="mr-3 sm:mr-8 px-5 sm:px-7 rounded-sm text-white font-semibold py-1 focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-green-300 bg-green-400" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;