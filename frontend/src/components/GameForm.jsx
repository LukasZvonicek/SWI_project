import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const GameForm = ({ onGameAdded }) => {
  const { username, role } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    genre: 'ACTION',
    platform: 'PC',
    releaseYear: '',
    imageUrl: ''
  });

  if (!username || role !== 'ADMIN') return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
      if (!res.ok) throw new Error('Chyba při přidávání hry');
      const newGame = await res.json();
      onGameAdded(newGame);
      setFormData({ title: '', genre: 'ACTION', platform: 'PC', releaseYear: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Přidat novou hru</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Název</label>
          <input
            name="title"
            className="w-full border rounded px-2 py-1"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Žánr</label>
          <select
            name="genre"
            className="w-full border rounded px-2 py-1"
            onChange={handleChange}
          >
            <option value="ACTION">Akční</option>
            <option value="RPG">RPG</option>
            <option value="STRATEGY">Strategie</option>
            <option value="ADVENTURE">Dobrodružná</option>
            <option value="SPORTS">Sportovní</option>
            <option value="SIMULATION">Simulace</option>
            <option value="PUZZLE">Hádanky</option>
            <option value="HORROR">Horor</option>
            <option value="RACING">Závodní</option>
            <option value="FIGHTING">Bojová</option>
            <option value="PLATFORMER">Platformer</option>
            <option value="SHOOTER">Střílečka</option>
            <option value="MMO">MMO</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Platforma</label>
          <select
            name="platform"
            className="w-full border rounded px-2 py-1"
            onChange={handleChange}
          >
            <option value="PC">PC</option>
            <option value="PLAYSTATION">PlayStation</option>
            <option value="XBOX">Xbox</option>
            <option value="NINTENTO">Nintendo</option>
            <option value="MOBILE">Mobil</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Rok vydání</label>
          <input
            name="releaseYear"
            type="number"
            className="w-full border rounded px-2 py-1"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            name="imageUrl"
            className="w-full border rounded px-2 py-1"
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Přidat hru
      </button>
    </form>
  );
};

export default GameForm;
