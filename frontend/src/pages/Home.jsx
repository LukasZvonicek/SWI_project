import React, { useState, useEffect, useContext } from 'react';
import GameForm from '../components/GameForm';
import GameList from '../components/GameList';
import { AuthContext } from '../auth/AuthContext';

export default function Home() {
  const [games, setGames] = useState([]);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    fetch('http://localhost:8080/games', { credentials: 'include' })
      .then(r => r.json())
      .then(setGames);
  }, []);

  const handleNewGame = game => setGames(g => [...g, game]);
  
  const handleGameDeleted = (id) => {
    setGames(g => g.filter(game => game.id !== id));
  };

  return (
    <div>
      {role === 'ADMIN' && <GameForm onGameAdded={handleNewGame} />}
      <GameList games={games} onGameDeleted={handleGameDeleted} />
    </div>
  );
}
