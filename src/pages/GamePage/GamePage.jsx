import React from "react";
import { useSelector } from "react-redux";
import { GameBuy, GameCover, GameGenre } from "../../components/GameItem";
import "./gamePage.scss";

const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);
  if (!game) return <h1>Нет такого игры!</h1>;
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube Video Player"
          ></iframe>
        </div>
        <div className="game-page__right">
          <div className="game-page__rigth-cover">
            <GameCover image={game.image} />
          </div>
          <p>{game.description}</p>
          <p className="game-page__secondary-text">
            Популярные метки этого продукта:
          </p>
          <div className="game-page__genres">
            {game.genres.map((genre) => (
              <GameGenre genre={genre} key={genre} />
            ))}
          </div>
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
