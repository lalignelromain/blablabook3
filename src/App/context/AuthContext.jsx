import React, { createContext, useState, useContext, useEffect } from 'react';

// Création du contexte
const AuthContext = createContext();

// Hook pour utiliser le contexte d'authentification
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // Vérification s'il y a déjà un token en sessionStorage
  useEffect(() => {
    const savedToken = sessionStorage.getItem('jwtToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // Fonction pour se connecter et stocker le jeton
  const login = (jwtToken) => {
    sessionStorage.setItem('jwtToken', jwtToken); // Stockage dans sessionStorage
    setToken(jwtToken);
    setIsAuthenticated(true);
  };

  // Fonction pour se déconnecter
  const logout = () => {
    sessionStorage.removeItem('jwtToken'); // Supprime le token de sessionStorage
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
