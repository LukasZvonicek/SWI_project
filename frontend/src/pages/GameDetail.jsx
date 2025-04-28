import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/games/${id}`, { credentials: 'include' })
      .then(res => {
        if (!res.ok) throw new Error('Hra nenalezena');
        return res.json();
      })
      .then(data => setGame(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!game) return <div>Načítání hry...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{game.title}</h2>
      <p className="text-gray-600 mb-2">Žánr: {game.genre}</p>
      <p className="text-gray-600 mb-2">Platforma: {game.platform}</p>
      <p className="text-gray-600 mb-2">Rok vydání: {game.releaseYear}</p>
      <Link
        to="/"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        ← Zpět na seznam her
      </Link>
    </div>
  );
}