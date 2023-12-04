import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function registro({ user }) {
  const [newUser, setNewUser] = useState(user);
  const { fetchData } = useContext(UserCtx);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setNewUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserById(user.id, newUser);
    fetchData();
    navigate("/");
  };
  const handleDelete = async () => {
    await deleteUserById(user.id);
    fetchData();
    navigate("/");
  };

  return (
    <div className="containerform">
      <form className='form-user' onSubmit={handleSubmit}>
        <div className='form-data'>
          <p>ID: <span>{user.id}</span></p>
          <label htmlFor="name">Usuario:</label>
          <input type="text" id='name' name='name' value={newUser.name} onChange={handleInputChange} />
          <label htmlFor="email">Correo:</label>
          <input type="text" id='email' name='email' value={newUser.email} onChange={handleInputChange} />
          <label htmlFor="password">Contraseña:</label>
          <input type="text" id='password' name='password' value={newUser.password} onChange={handleInputChange} />
        </div>
        <div className="buttonsform">
          <input type="submit" value="editar" />
          <input type="button" value="eliminar" onClick={handleDelete} />
</div>
      </form>
    </div>
  );
}

export default registro;