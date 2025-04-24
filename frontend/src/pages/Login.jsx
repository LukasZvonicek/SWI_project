import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <form onSubmit={handleSubmit}>
      <h2>Přihlášení</h2>
      <input name="username" placeholder="Uživatelské jméno" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Heslo" onChange={handleChange} required />
      <button type="submit">Přihlásit</button>
    </form>
  );
};

export default Login;
