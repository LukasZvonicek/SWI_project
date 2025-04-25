import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthContext } from './auth/AuthContext';

function App() {
  const { username, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Databáze her</h1>

      <nav>
        <Link to="/">Domů</Link> |{' '}
        {!username ? (
          <>
            <Link to="/login">Přihlásit</Link> |{' '}
            <Link to="/register">Registrovat</Link>
          </>
        ) : (
          <>
            Přihlášen jako <strong>{username}</strong>{' '}
            <button onClick={logout} style={{ marginLeft: '1em' }}>Odhlásit</button>
          </>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
