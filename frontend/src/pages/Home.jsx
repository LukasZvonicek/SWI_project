import React, { useState, useEffect } from 'react';
import GameForm from '../components/GameForm';
import GameList from '../components/GameList';

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  const handleNewGame = (newGame) => {
    console.log('Nová hra přidána:', newGame);
    setGames(prevGames => [...prevGames, newGame]);
  };

  return (
    <div>
      <GameForm onGameAdded={handleNewGame} />
      <GameList games={games} />
    </div>
  );
}