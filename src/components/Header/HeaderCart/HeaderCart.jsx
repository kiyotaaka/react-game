import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import "./headerCart.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { calcTotalPrice } from "./utils";
import { CartMenu, ItemsInCart } from "../HeaderCart";
import { useNavigate } from "react-router-dom";

const HeaderCart = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <AiOutlineShoppingCart
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible((prev) => !prev)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default HeaderCart;
