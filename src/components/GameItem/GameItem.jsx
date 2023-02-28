import React from 'react';
import { GameBuy, GameCover, GameGenre } from '../GameItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';
import './gameItem.scss';

const GameItem = ({ game }) => {
  const { title, genres, image } = game;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${title}`);
  };
  return (
    <div className="game-item" onClick={handleClick}>
      <div className="game-item__cover">
        <GameCover image={image} />
      </div>
      <div className="game-item__details">
        <h2 className="game-item__title">{title}</h2>
        <div className="game-item__genre">
          {genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
