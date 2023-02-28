import React from "react";
import "./cartItem.scss";

const CartItem = ({ title, price, id }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
      </div>
    </div>
  );
};

export default CartItem;
