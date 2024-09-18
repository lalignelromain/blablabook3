
import { useState } from 'react';
import HomePage from '../pages/HomePage';
import Navbar from '../App/components/NavBar';
import NosLivres from '../pages/NosLivres';
import BandeDessinee from '../pages/BandeDessinee';
import Litterature from '../pages/Litterature';
import Mangas from '../pages/Mangas';
import MentionsLegales from '../pages/MentionsLegales';
import Inscription from '../pages/Inscription';
import Connexion from '../pages/Connexion';
import Contact from '../pages/Contact';
import Footer from '../App/components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../App/context/AuthContext'; // Importation du fournisseur d'authentification
import RequireAuth from '../pages/RequireAuth'; // Importation de la protection de route


// import AppContext from '../App/context/AppContext';

function Root() {
  // const location = useLocation();
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  // const shouldHideTextAndSlider = location.pathname !== '/';

  return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
  );
}

export default Root;