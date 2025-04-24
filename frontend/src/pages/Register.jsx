import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'USER' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) navigate('/login');
        else alert('Registrace selhala');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrace</h2>
      <input name="username" placeholder="Uživatelské jméno" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Heslo" onChange={handleChange} required />
      <button type="submit">Registrovat</button>
    </form>
  );
};

export default Register;