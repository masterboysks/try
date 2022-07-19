import React from "react";

const Button = ({ logo, title }) => {
  return (
    <div className="button">
      <img src={logo} alt={title} className="icon" />
      <div className="nav-text">{title}</div>
    </div>
  );
};

export default Button;
