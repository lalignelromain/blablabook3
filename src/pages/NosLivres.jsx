import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import './DetailBook.css';

const { Meta } = Card;


const NosLivres = () => {
   const [books, setBooks] = useState([]);

   const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3456/book');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Erreur lors du chargement des livres:', error);
    }
   }

   useEffect(() => {
    fetchBooks(); 
   }, []);

//   return (

   
//       <div className="nos-livres" style={{ padding: '20px' }}>
//         <h1>Nos livres</h1>
//         <Row gutter={[8, 8]}>
//           {books.map((book) => (
//             <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
//               <Card
//                 hoverable
//                 cover={<img alt={book.title} src={`http://localhost:3456${book.image}`} />}
//               >
//                 <Meta title={book.title} description={book.author} />
//               </Card>
//             </Col>
//           ))}
//         </Row>
      
//     </div>
//   );
// };
  return (

   
    <div className='container_book'>
     <h1 className='container_book-title'>Nos livres</h1>
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


export default NosLivres;

