import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: 'USER' })
      });

      const text = await response.text();
      if (response.ok) {
        setSuccess('Registrace proběhla úspěšně! Přihlaste se.');
        
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(text || 'Registrace selhala');
      }
    } catch (err) {
      console.error(err);
      setError('Chyba při registraci');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Registrace</h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Uživatelské jméno</label>
          <input
            type="text"
            name="username"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Heslo</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-300"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Registrovat
        </button>
      </form>
    </div>
  );
};

export default Register;