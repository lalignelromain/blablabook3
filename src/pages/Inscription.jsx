// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// const Inscription = () => {
//   const [prenom, setPrenom] = useState('');
//   const [nom, setNom] = useState('');
//   const [pseudo, setPseudo] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Enregistrer les informations de l'utilisateur dans la base de données
//     // Pour l'exemple, nous allons simplement afficher les informations de l'utilisateur
//     console.log('Inscription réussie !');
//     console.log('Prénom :', prenom);
//     console.log('Nom :', nom);
//     console.log('Pseudo :', pseudo);
//     console.log('Email :', email);
//     console.log('Mot de passe :', password);
//   };

//   return (
//     <div className="inscription-page">
//   <h2>Inscription</h2>
//   <form onSubmit={handleSubmit} className="inscription-form">
//     <label className="label-prénom">
//       Prénom :
//       <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
//     </label>
//     <label className="label-nom">
//       Nom :
//       <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
//     </label>
//     <label className="label-pseudo">
//       Pseudo:
//       <input type="text" value={pseudo} onChange={(event) => setPseudo(event.target.value)} />
//     </label>
//     <label className="label-email">
//       Email :
//       <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//     </label>
//     <label className="label-mot-de-passe">
//       Mot de passe :
//       <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//     </label>
    
//     <button type="submit">Inscription</button>
//     {error && <p className="error-message">{error}</p>}
//   </form>
//   <p>Vous avez déjà un compte ? <Link to="/connexion" className="se-connecter-link">Se connecter</Link></p>
// </div>
//   );
// };

// export default Inscription;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App/App.css';

const Inscription = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  const validatePassword = (password) => {
    // Vérification de la robustesse du mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      setError("Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3456/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: prenom,
          lastname: nom,
          username: pseudo,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Inscription réussie !", data);
        navigate('/confirmation-inscription');
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      setError("Erreur de connexion au serveur");
    }
  };

  return (
    <div className="inscription-page">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className="inscription-form">
        <label className="label-prenom">
          Prénom :
          <input
            type="text"
            value={prenom}
            onChange={(event) => setPrenom(event.target.value)}
          />
        </label>
        <label className="label-nom">
          Nom :
          <input
            type="text"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />
        </label>
        <label className="label-pseudo">
          Pseudo :
          <input
            type="text"
            value={pseudo}
            onChange={(event) => setPseudo(event.target.value)}
          />
        </label>
        <label className="label-email">
          Email :
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="label-password">
          Mot de passe :
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button type="submit">Inscription</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>
        Vous avez déjà un compte ?{" "}
        <Link to="/connexion" className="se-connecter-link">
          Se connecter
        </Link>
      </p>
    </div>
  );
};

export default Inscription;
