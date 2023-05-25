import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/loguito.png'


const NavBar = () =>{

    return (
       <div>
        <nav className="navbar navbar-expand-lg mynavbar">
      <div className="container">
        <NavLink className="navbar-brand text-light" to="/"> <img src={logo} className="logoN"></img>
          </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-light" exact to="/"> <button className="boton">
                Home</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/products"> <button className="boton">
                Productos</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/myaccount"> <button className="boton">
                Mi cuenta</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/cart"> <button className="boton">
                Carrito</button></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
       </div>
    )
}
export default NavBar;