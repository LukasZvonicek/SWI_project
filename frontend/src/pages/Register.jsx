import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, role: 'USER' })
    }).then(res => (res.ok ? navigate('/login') : alert('Chyba při registraci')));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Registrace</h2>
      <label className="block text-sm mb-1">Uživatelské jméno</label>
      <input
        name="username"
        className="w-full border rounded px-2 py-1 mb-4"
        onChange={e => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <label className="block text-sm mb-1">Heslo</label>
      <input
        name="password"
        type="password"
        className="w-full border rounded px-2 py-1 mb-4"
        onChange={e => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Registrovat
      </button>
    </form>
  );
};

export default Register;
