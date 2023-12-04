import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function NavBar() {

   return (
     <nav>
       <h1 className='Navbar'>Write to Us</h1>
       <NavLink to={"/"}>Home</NavLink>
       <NavLink to={"/tienda"}>Store</NavLink>
       <NavLink to={"/crearUser"}>Crear usuario</NavLink>
       <NavLink to={"/Cart"}>Cart</NavLink>
     </nav>
   );
 }

 export default NavBar;