import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(() => localStorage.getItem('username'));
  const [role, setRole] = useState(() => localStorage.getItem('role'));

  const login = (user, userRole) => {
    localStorage.setItem('username', user);
    localStorage.setItem('role', userRole);
    setUsername(user);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    setUsername(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ username, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
