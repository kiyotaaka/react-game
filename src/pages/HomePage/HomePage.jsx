import React from 'react';
import './homePage.scss';
import { GameItem, Loading } from '../../components';

import { api } from '../../api';

const HomePage = () => {
  const [games, setGames] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/todos');
        setGames(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="home-page">
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};
export default HomePage;
