import React, { useState } from 'react';

const GameForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    genre: 'ACTION',
    platform: 'PC',
    releaseYear: ''
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8080/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(() => window.location.reload()) // refresh list
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Přidat hru</h2>
      <input name="title" placeholder="Název" onChange={handleChange} required />
      <select name="genre" onChange={handleChange}>
        <option value="ACTION">Akční</option>
        <option value="RPG">RPG</option>
        <option value="STRATEGY">Strategie</option>
        <option value="ADVENTURE">dobrodružná</option>
        <option value="SPORTS">Sportovní</option>
        <option value="SIMALTION">Simulátor</option>
        <option value="PUZZLE">Hádanka</option>
        <option value="HORROR">Horor</option>
        <option value="RACING">Závodní</option>
        <option value="FIGHTING">Bojová</option>
        <option value="PLATFORMER">Platformová</option>
        <option value="SHOOTER">Střílečka</option>
        <option value="MMO">MMO</option>

      </select>
      <select name="platform" onChange={handleChange}>
        <option value="PC">PC</option>
        <option value="PLAYSTATION">PlayStation</option>
        <option value="XBOX">Xbox</option>
        <option value="NINTENDO">Nintendo</option>
        <option value="MOBILE">Mobilní</option>
        
      </select>
      <input name="releaseYear" placeholder="Rok vydání" type="number" onChange={handleChange} required />
      <button type="submit">Přidat</button>
    </form>
  );
};

export default GameForm;
