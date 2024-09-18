import React from 'react';
import '../App/App.css';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <div className="mentions-legales">
      <h1 className="mentions-titre">Mentions légales</h1>
      <p className="mentions-texte">
        Ce site est édité par <strong>[Nom de l'éditeur]</strong>, <em>[Adresse de l'éditeur]</em>, <span>[Code postal de l'éditeur]</span>, <span>[Ville de l'éditeur]</span>.
      </p>
      <p className="mentions-texte">
        Le directeur de la publication est <strong>[Nom du directeur de la publication]</strong>.
      </p>
      <p className="mentions-texte">
        Le site est hébergé par <strong>[Nom de l'hébergeur]</strong>, <em>[Adresse de l'hébergeur]</em>, <span>[Code postal de l'hébergeur]</span>, <span>[Ville de l'hébergeur]</span>.
      </p>
      <p className="mentions-texte">
        Pour toute demande de renseignements ou tout autre besoin, veuillez<Link to="/contact"> <span className="contact-link">nous contacter</span></Link>.
      </p>
    </div>
  );
};

export default MentionsLegales;