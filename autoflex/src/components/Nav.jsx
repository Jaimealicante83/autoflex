import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss"; // Estilos del Nav

const Nav = () => {
  const location = useLocation();

  // Verificar si la ruta es "/reserva" o "/blog"
  const isSpecialRoute = location.pathname === "/reserva" || location.pathname === "/blog";

  return (
    <nav className={`nav ${isSpecialRoute ? "nav-salmon" : ""}`}>
      <div className="container">
        <div className="logo">
        <Link to="/"><img src="/autoflex-logo.png" alt="Logo" /></Link>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/reserva">Reserva</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
