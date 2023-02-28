import React from "react";
import classNames from "classnames";
import "./button.scss";

const Button = ({ children, onClick, type, size = "5" }) => {
  const btnClass = classNames({
    btn: true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": size === "s",
    "btn--medium": size === "m",
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
