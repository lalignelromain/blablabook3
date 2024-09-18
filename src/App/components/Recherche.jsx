import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Recherche.css'

const Recherche = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [onFocus, setOnFocus] = useState(false);

    const searchBarRef = useRef(null);
    const resultsRef = useRef(null);

    // Fonction pour gérer les clics en dehors de la barre de recherche et des résultats
    const handleClickOutside = (e) => {
        if (searchBarRef.current && resultsRef.current && 
            !searchBarRef.current.contains(e.target) &&
            !resultsRef.current.contains(e.target)
        ) {
            setOnFocus(false);
        }
    };

    const handleOnFocus = () => {
        setOnFocus(true);
    };

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:3456/book');
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des livres', error);
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        const cleanedSearchTerm = searchTerm.trim().replace(/\s+/g, ' ');
        const filtered = books.filter(book => 
            book.title.toLowerCase().includes(cleanedSearchTerm.toLowerCase())
        );
        setFilteredBooks(filtered);
    }, [searchTerm, books]);

    useEffect(() => {
        // Ajout de l'écouteur d'événements pour les clics en dehors
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Nettoyage de l'écouteur lors du démontage
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='search-bar'>
            <input
                className='search-bar-input'
                type='text'
                placeholder='Recherche des livres...'
                value={searchTerm}
                onChange={handleSearch}
                onFocus={handleOnFocus}
                ref={searchBarRef} // Référence à la barre de recherche
            />
            {onFocus & searchTerm.trim() !== '' && (
                <div className='search-result' ref={resultsRef}> {/* Référence à la liste des résultats */}
                    {filteredBooks.map((book) => (
                        <div key={book.id}>
                            <Link 
                                to={`/book/detail/${book.id}`} 
                                className='book-link' 
                                onClick={() => setOnFocus(false)}
                            >
                                <div className='book'>
                                    <img 
                                        className='search-result-image' 
                                        alt={book.title} 
                                        src={`http://localhost:3456${book.image}`} 
                                    />
                                    <p>{book.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Recherche;