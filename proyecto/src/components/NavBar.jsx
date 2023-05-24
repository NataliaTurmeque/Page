import React from "react";
 import { Link } from "react-router-dom";


const NavBar = () =>{

    return (

       <nav>
        <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to ="/myaccount">Mi cuenta</Link></li>
        <li><Link to="/cart"> Carrito</Link> </li>
        </ul>
        </nav>
    )
}
export default NavBar;