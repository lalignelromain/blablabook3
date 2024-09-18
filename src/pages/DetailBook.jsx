import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailBook = () => {

    const { id } = useParams()
    const [book, setBook] = useState({})

    useEffect ( () => {
    const fetchOneBook = async () => {
        try {
            const responseOneBook = await fetch(`http://localhost:3456/book/detail/${id}`);
            const dataOneBook = await responseOneBook.json();
            setBook(dataOneBook);
        } catch (error) {
            console.error('Livre non trouvé', error)
        }
    }
    fetchOneBook()
    }, [id]);

    return (
        <div className='one-book'>
            <img className='one-book-image' alt={book.title} src={`http://localhost:3456${book.image}`} />
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.date_of_publication}</p>
            <p>{book.summary}</p>
        </div>
    );
};

export default DetailBook;