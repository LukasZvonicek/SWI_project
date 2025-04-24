import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const login = (name) => {
    localStorage.setItem("username", name);
    setUsername(name);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
