import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const [emailSent, setEmailSent] = useState(false); // Estado para el mensaje de éxito

  // Maneja el envío del email
  const handleEmailSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    setEmailSent(true); // Muestra el mensaje de éxito
    setTimeout(() => setEmailSent(false), 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Marca y redes sociales */}
        <div className="footer-section footer-brand">
          <Link to="/"><img src="./autoflex-logo.png" className="footer-logo" alt="Logo" /></Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu
            fringilla finibus.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="./facebook-logo.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="./instagram-logo.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="./x-logo.png" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Enlaces internos */}
        <div className="footer-section">
          <h3>Secciones</h3>
          <ul>
            <li>
              <Link to="/reserva" style={{ textDecoration: "none", color: "inherit" }}>Reserva</Link>
            </li>
            <li>
              <Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}>Blog</Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Categorías */}
        <div className="footer-section">
          <h3>Categorías</h3>
          <ul>
            <li>
              <Link to="/reserva" style={{ textDecoration: "none", color: "inherit" }}>Económico</Link>
            </li>
            <li>
              <Link to="/reserva" style={{ textDecoration: "none", color: "inherit" }}>Familiar</Link>
            </li>
            <li>
              <Link to="/reserva" style={{ textDecoration: "none", color: "inherit" }}>Lujo</Link>
            </li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <div className="footer-section footer-contact">
          <h3>Contacta</h3>
          <form className="contact-input" onSubmit={handleEmailSubmit}>
            <input type="email" placeholder="email@email.com" required />
            <button type="submit">
              <span>
                <img src="/flecha.png" alt="Enviar" />
              </span>
            </button>
          </form>
          {/* Mensaje de éxito */}
          {emailSent && <p className="success-message">¡Email enviado exitosamente!</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
