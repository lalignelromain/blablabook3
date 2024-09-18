import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';

// const { Meta } = Card;

function HomePage() {
  const [randomBooks, setRandomBooks] = useState([]);
  const [error, setError] = useState(null);

  // Récupérer des livres aléatoires depuis le backend
  useEffect(() => {
    fetch('http://localhost:3456/book/randomBooks', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') // Utiliser un token si nécessaire
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des livres.');
      }
      return response.json();
    })
    .then(data => setRandomBooks(data))
    .catch(error => setError(error.message));
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bienvenue sur Blabla Book</h1>
        <p>Explorez notre vaste collection de livres, mangas, et bandes dessinées !</p>
        <Link to="/selection">
          <Button type="select">Voir notre sélection</Button>
        </Link>
      </div>

      {/* Section des livres aléatoires */}
      <div className="random-books-section">
        <h2>Suggestions aléatoires</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <Row gutter={[8, 8]}>
            {randomBooks.length > 0 ? (
              randomBooks.map(book => (
                <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
                <Card
              hoverable
              cover={<img className='container_book-title-image'alt={book.title} src={`http://localhost:3456${book.image}`} />}
            >
              <h3 className='container_book-title-name'>{book.title}</h3>
               <p className='container_book-title-author'>{book.author} </p>
            </Card>
                </Col>
              ))
            ) : (
              <p>Chargement des suggestions...</p>
            )}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomePage;
