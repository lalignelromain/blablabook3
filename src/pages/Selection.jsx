import { useState, useEffect } from 'react';
import { Card, Col, Row} from 'antd';
import PropTypes from 'prop-types';
// const {Meta} = Card;
const BooksByUnivers = ({universId = '4'}) => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await fetch(`http://localhost:3456/book/univers/${universId}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Erreur lors du chargement des livres:', error);
    }
  }
  useEffect(() => {
    fetchBooks();
  }, [universId]);
  
  return (
    
    <div className='container_book'>
      <h1 className='container_book-title'>La Sélection de la team BlaBlaBook</h1>
      <h2 className='notification'>Prochainement</h2>
      <p className='text-notification'>Bientôt ici vous trouverez notre sélection de livres coup de coeur ...<br/>
        Merci de votre fidélité
      </p>
      <Row gutter={[8, 8]}>
        {books.map((book) => (
          <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img className='container_book-title-image'alt={book.title} src={`http://localhost:3456${book.image}`} />}
            >
              <h3 className='container_book-title-name'>{book.title}</h3>
               <p className='container_book-title-author'>{book.author} </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
  BooksByUnivers.propTypes = {
    universId: PropTypes.string.isRequired,
};
export default BooksByUnivers;

