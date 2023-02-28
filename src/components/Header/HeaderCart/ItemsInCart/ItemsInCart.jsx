import React from "react";
import "./itemsInCart.scss";

const ItemsInCart = ({ quantity }) => {
  return quantity > 0 ? (
    <div className="items-in-cart">{quantity}</div>
  ) : (
    <div className="items-in-cart">0</div>
  );
};

export default ItemsInCart;
