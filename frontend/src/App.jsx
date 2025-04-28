import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthContext } from './auth/AuthContext';
import GameDetail from './pages/GameDetail';

function App() {
  const { username, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">🎮 Databáze her</h1>
          <nav className="flex space-x-4 text-blue-600">
            <Link to="/" className="hover:underline">Domů</Link>
            {!username ? (
              <>
                <Link to="/login" className="hover:underline">Přihlásit</Link>
                <Link to="/register" className="hover:underline">Registrovat</Link>
              </>
            ) : (
              <>
                <span>Přihlášen: <strong>{username}</strong></span>
                <button
                  onClick={logout}
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Odhlásit
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
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
          <Route path="/games/:id" element={<GameDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;