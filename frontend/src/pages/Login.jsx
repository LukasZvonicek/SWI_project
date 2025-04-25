import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.text())
      .then(data => {
        if (data === 'Login successful') {
          login(formData.username);
          navigate('/');
        } else {
          alert('Špatné přihlašovací údaje');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Přihlášení</h2>
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
      <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Přihlásit
      </button>
    </form>
  );
};

export default Login;