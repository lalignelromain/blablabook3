import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App/context/AuthContext'; // Importation du contexte d'authentification
import '../App/App.css';

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erreur, setErreur] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Utilisation du contexte d'authentification

  const handleSubmit = async (e) => {
    e.preventDefault();


  //   // Vérification des champs
  //   if (username === '' || password === '') {
  //     setErreur('Veuillez remplir tous les champs');
  //   } else {
  //     // Envoi des données à l'API ou au service de connexion
  //     console.log('Connexion réussie !');

  //     // une fois la connexionréussit, on appel la fonction login et rediriger vers l'espace privé
  //     login();
  //     navigate('/espace-prive');
  //   }
  // };
  try {
    const response = await fetch('http://localhost:3456/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token; // Le token JWT reçu du backend
      login(token); // Stocker le token via la fonction login

      navigate('/espace-prive');
      
    } else {
      const errorData = await response.json();
      setErreur(errorData.message || 'Erreur de connexion');
    }
  } catch (error) {
    setErreur('Erreur de connexion au serveur');
  }
};

  return (
    <div className="connexion-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom d'utilisateur :</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Mot de passe :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Connexion;
