import React, { useEffect, useState } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Seznam her</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            {game.title} ({game.platform}) - {game.genre} [{game.releaseYear}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
