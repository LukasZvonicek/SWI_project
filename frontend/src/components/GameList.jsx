import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const GameList = ({ games, onGameDeleted }) => {
  const { role } = useContext(AuthContext);

  const handleDelete = async (id) => {
    if (!window.confirm('Opravdu chceš smazat tuto hru?')) return;
    try {
      const res = await fetch(`http://localhost:8080/games/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) {
        onGameDeleted(id);
      } else {
        console.error('Chyba při mazání hry');
      }
    } catch (err) {
      console.error('Chyba při komunikaci se serverem', err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Seznam her</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {games.map(game => (
          <div
            key={game.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold">{game.title}</h3>
            <p className="text-sm text-gray-500">
              {game.genre} &middot; {game.platform}
            </p>
            <p className="mt-2">
              Rok vydání: <span className="font-medium">{game.releaseYear}</span>
            </p>
            {role === 'ADMIN' && (
              <button
                onClick={() => handleDelete(game.id)}
                className="mt-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Smazat
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
