import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import HeaderCart from "./HeaderCart/HeaderCart";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <NavLink to="/" className="header__store-title">
          Game Store
        </NavLink>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <HeaderCart />
      </div>
    </header>
  );
};

export default Header;
