import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tienda from './pages/Tienda.jsx';
import crearUser from './pages/registro.jsx';
import RutaInexistente from './pages/RutaInexistente';
import { addNewBook, getAllBooks, deleteBook } from './nombre-del-archivo-donde-estan-las-funciones';


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // llama a la funcin getAllBooks al montar el componente
    getAllBooks();
  }, []);

  const handleAddBook = async (formData, token) => {
    await addNewBook(formData, token);

    // actualiza la lista de libros despues de agregar uno nuevo
    getAllBooks();
  };

  const handleDeleteBook = async (id, token) => {
    await deleteBook(id, token);

    // actualiza la lista de libros despues de borrar uno
    getAllBooks();
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/iniciarsesion" element={<user/>} />
          <Route path="/crearuser" element={<registro/>} />
          <Route path="*" element={<RutaInexistente />} />
        </Routes>
      </BrowserRouter>

      <main>
        {books.map((b) => (
          <article key={b.id} data-title={b.title}>
            <img src={b.poster} alt={b.title} />
            <p>{b.year}</p>
            <p>{b.author}</p>
            <p>${b.price}</p>
            <button onClick={() => handleDeleteBook(b.id, 'tu-token')}>Borrar</button>
          </article>
        ))}
      </main>
    </>
  );
}

export default App ;