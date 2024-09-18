import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationInscription = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/connexion'); // Redirige vers la page de connexion après 5 secondes
    }, 5000);

    return () => clearTimeout(timer); // Nettoie le timer pour éviter les fuites de mémoire
  }, [navigate]);

  return (
    <div className="confirmation-page">
      <h2>Inscription réussie !</h2>
      <p>Vous allez être redirigé vers la page de connexion dans un instant...</p>
    </div>
  );
};

export default ConfirmationInscription;
