import React from 'react';
import { Navigate } from 'react-router-dom'; // Import for navigation

const PrivateRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/login" replace />; // Redirect to login
};

export default PrivateRoute;
