import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from '../../../redux/cart/reducer';
import './gameBuy.scss';
import Button from '../../UI/button/Button';

const GameBuy = ({ game }) => {
  const { price, id } = game;
  const dispatch = useDispatch();
  const items = useSelector(({ cart }) => cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === id);
  const handleClick = (e) => {
    e.stopPropagation();
    !isItemInCart ? dispatch(setItemInCart(game)) : dispatch(deleteItemFromCart(id));
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{price} руб.</span>
      <Button type={isItemInCart ? 'secondary' : 'primary'} onClick={handleClick}>
        {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
      </Button>
    </div>
  );
};

export default GameBuy;
