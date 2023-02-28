import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GameCover from '../GameItem/GameCover/GameCover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './orderItem.scss';

const OrderItem = ({ game }) => {
  const { id, title, image, price } = game;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGamePage = () => navigate(`/app/${title}`);
  const handleClick = () => dispatch(deleteItemFromCart(id));
  return (
    <div className="order-item">
      <div className="order-item__cover" onClick={handleGamePage}>
        <GameCover image={image} />
      </div>
      <div className="order-item__title">
        <span>{title}</span>
      </div>
      <div className="order-item__price">
        <span>{price} руб.</span>
        <AiOutlineCloseCircle size={25} className="order-item__delete-icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default OrderItem;
