import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { username } = useContext(AuthContext);

  if (!username) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;