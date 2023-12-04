import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import SearchBar from "../components/busqueda";

const Tienda = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar/>
      <div>
        <div> <SearchBar onChangeText={handleChangeText} /></div>
        {books.map((book) => (
          <article key={book.id} data-title={book.title}>
            <img src={book.poster} alt={book.title} />
            <p>{book.year}</p>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <button>Comprar</button>
          </article>
        ))}
      </div>
    </>
  );
};

export default Tienda;