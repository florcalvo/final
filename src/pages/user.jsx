import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

function User({ user }) {
  const navigate = useNavigate();
  const { createdAt, name, email, password, id } = user;
  const handleUserClick = () => {
    navigate("/details", { state: { user } });
  };
  return (
    <article className='user-container' onClick={handleUserClick}>
      <div className="user-body">
        <h3>Usuario: {name}</h3>
        <p>Email: {email}</p>
        <p>Contraseña: {password}</p>
      </div>
    </article>
  );
}

export default User;