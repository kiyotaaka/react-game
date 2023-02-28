import React from "react";
import "./gameCover.scss";

const GameCover = ({ image }) => {
  return (
    <div className="game-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};

export default GameCover;
