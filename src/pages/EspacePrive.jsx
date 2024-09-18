// import React, { useEffect, useState } from 'react';
// import { Progress, List, Card, Tabs, Table, Row, Col } from 'antd'; // Badge retiré car inutilisé
// import { useAuth } from './context/AuthContext';
// import './CSS/EspacePrive.css';

// const EspacePrive = () => {
//   const livresEnCours = [
//     { titre: 'Le Seigneur des Anneaux', progression: 70 },
//     { titre: '1984', progression: 45 },
//     { titre: 'Le Petit Prince', progression: 20 },
//   ];

//   const maBibliotheque = [
//     { key: 1, titre: 'Le Petit Prince', genre: 'Littérature', statut: 'lu' },
//     { key: 2, titre: 'Dune', genre: 'Science-fiction', statut: 'non lu' },
//     { key: 3, titre: 'Harry Potter', genre: 'Fantastique', statut: 'favori' },
//   ];

//   const columns = [
//     {
//       title: 'Titre',
//       dataIndex: 'titre',
//       key: 'titre',
//     },
//     {
//       title: 'Genre',
//       dataIndex: 'genre',
//       key: 'genre',
//     },
//     {
//       title: 'Statut',
//       dataIndex: 'statut',
//       key: 'statut',
//     },
//   ];

//   const items = [
//     {
//       key: '1',
//       label: 'Tous les livres',
//       children: <Table dataSource={maBibliotheque} columns={columns} />,
//     },
//     {
//       key: '2',
//       label: 'Livres lus',
//       children: <Table dataSource={maBibliotheque.filter(livre => livre.statut === 'lu')} columns={columns} />,
//     },
//     {
//       key: '3',
//       label: 'Livres non lus',
//       children: <Table dataSource={maBibliotheque.filter(livre => livre.statut === 'non lu')} columns={columns} />,
//     },
//     {
//       key: '4',
//       label: 'Livres favoris',
//       children: <Table dataSource={maBibliotheque.filter(livre => livre.statut === 'favori')} columns={columns} />,
//     },
//   ];

//   return (
//     <div className="espace-prive-container">
//       <Row justify="center" className="page-header">
//         <Col>
//           <h1 className="center-text">Bienvenue dans votre espace privé</h1>
//         </Col>
//       </Row>
//       <div className="sous-titre-prive">
//         <p>Vous êtes connecté et vous pouvez accéder à votre contenu exclusif ici.</p>
//       </div>

//       <Row justify="center">
//         <Col xs={24} md={18}>
//           {/* Progression de lecture */}
//           <Card title="Progression de lecture" className="section-card">
//             <List
//               itemLayout="horizontal"
//               dataSource={livresEnCours}
//               renderItem={item => (
//                 <List.Item>
//                   <List.Item.Meta title={item.titre} />
//                   <Progress percent={item.progression} status="active" />
//                 </List.Item>
//               )}
//             />
//           </Card>

//           {/* Bibliothèque virtuelle */}
//           <Card title="Ma bibliothèque" className="section-card">
//             <Tabs defaultActiveKey="1" items={items} />
//           </Card>

//           {/* Historique des commentaires */}
//           {/* Supprimé pour éviter l'erreur liée à l'utilisation du tableau "commentaires" qui est commenté */}

//           {/* Section pour la gestion du compte */}
//           <Card title="Paramètres de compte" className="section-card">
//             <div className="section">
//               <h2>Paramètres de compte</h2>
//               <button>Modifier mes informations</button>
//               <button>Changer mon mot de passe</button>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default EspacePrive;
import React, { useEffect, useState } from 'react';
import { Progress, List, Card, Tabs, Table, Row, Col } from 'antd';
import { useAuth } from '../App/context/AuthContext';
import './EspacePrive.css';

const EspacePrive = () => {
  const { token } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('http://localhost:3456/espace-prive', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // Ajoutez le jeton JWT ici
        }
      });
      const data = await response.json();
      setUser(data.user);
    };

    fetchUserData();
  }, [token]);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="espace-prive-container">
      <Row justify="center" className="page-header">
        <Col>
          <h1 className="center-text">Bienvenue, {user.username} !</h1>
        </Col>
      </Row>
      <div className="sous-titre-prive">
        <p>Vous êtes connecté et vous pouvez accéder à votre contenu exclusif ici.</p>
      </div>

      {/* Le reste du contenu de votre espace privé */}
    </div>
  );
};

export default EspacePrive;
