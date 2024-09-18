import React, { useState } from 'react';
import '../App/App.css';

const Contact = () => {
  const [civility, setCivility] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données du formulaire à un serveur ou à un service de messagerie
    // Pour l'exemple, nous allons simplement afficher un message de confirmation
    setEnvoye(true);
  };

  return (
    <div className="contact-page">
      <h2 className="title">Formulaire de contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className="label" htmlFor="civility">Civilité :</label>
          <div className="radio-group">
            <input
              type="radio"
              id="Mme"
              value="Mme"
              checked={civility === 'Mme'}
              onChange={(e) => setCivility(e.target.value)}
            />
            <label htmlFor="Mme">Mme</label>
            <input
              type="radio"
              id="Mr"
              value="Mr"
              checked={civility === 'Mr'}
              onChange={(e) => setCivility(e.target.value)}
            />
            <label htmlFor="Mr">Mr</label>
          </div>
        </div>
        <div className="form-group">
          <label className="label required" htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label required" htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label required" htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="phone">Téléphone :</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label required" htmlFor="subject">Objet de la demande :</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label required" htmlFor="message">Message* :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea"
            required
          />
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
        {envoye && <p className="success-message">Merci pour votre message ! Nous vous répondrons dès que possible.</p>}
      </form>
    </div>
  );
};

export default Contact;