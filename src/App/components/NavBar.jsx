
import { useState } from 'react'
import '../App.css'
import { Link, useLocation, useNavigate } from 'react-router-dom' 
import logo from '../../assets/design/Logo.png';
import { useAuth } from '../context/AuthContext';
import Recherche from './Recherche';




const Navbar = () => {

const location = useLocation();
const navigate = useNavigate(); // Utilisé pour la redirection après déconnexion
const { isAuthenticated, logout } = useAuth();

const universName = [
{ id: 1, title: 'Nos livres' },
{ id: 2, title: 'Littérature' },
{ id: 3, title: 'Mangas' },
{ id: 4, title: 'Bande-dessinée' },
];

const handleLogout = () => {
  logout(); // Déconnecter l'utilisateur
  navigate('/'); // Rediriger vers la page d'accueil après déconnexion
};

  return (
   <nav className='navbar'>

    <div className='logo'>
      <Link to="/">
      <img src={logo} alt="logo" />
      </Link>
    </div>

    <Recherche/>

     {!isAuthenticated && location.pathname !== '/inscription'  && (
    <div className="inscription-button">
      <Link to="/inscription">
        <button className="inscription">Inscription</button>
        </Link>
      </div>
      )}

      {!isAuthenticated && location.pathname !== '/connexion'  && (
      <div className="connection-button">
        <Link to="/connexion">
        <button className="connection">Connexion</button>
        </Link>
      </div>
      )}

      {/* Bouton de déconnexion si l'utilisateur est connecté */}
      {isAuthenticated && (
        <div className="logout-button">
          <button className="logout" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      )}


      <div className="onglets-navbar">

          {universName.map((item) => (
          <Link key={item.id} to={`/${item.title.toLowerCase().replace(' ', '-')}`}>
            <button className="btn-nav-link">{item.title}</button>
          </Link>
           ))}    

        </div>

   </nav>
  )
}
export default Navbar;
