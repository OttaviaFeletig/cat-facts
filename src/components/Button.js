import React from "react";

function Button({ text, className }) {
  return (
    <button className={className}>
      <p>{text}</p>
    </button>
  );
}

export default Button;
