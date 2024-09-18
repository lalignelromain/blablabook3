
import { Navigate } from 'react-router-dom';
import { useAuth } from '../App/context/AuthContext';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    return <Navigate to="/connexion" />;
  }

  // Sinon, afficher les enfants (l'espace privé dans ce cas)
  return children;
};

export default RequireAuth;
