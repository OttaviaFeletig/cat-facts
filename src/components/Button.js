import React from "react";

const Button = ({ children, className, onClick, disabled }) => {
  return (
    <button
      className={className}
      type="button"
      disabled={disabled !== undefined ? disabled : false}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
