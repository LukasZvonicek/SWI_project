import React from 'react';

const GameList = ({ games }) => {
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;