import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../components/Header/HeaderCart/utils";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./orderPage.scss";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__rigth">
        <div className="order-page__total-price">
          <span>
            {items.length} товар на сумму {calcTotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
