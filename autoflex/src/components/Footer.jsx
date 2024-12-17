import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-section footer-brand">
                <img src="./autoflex-logo.png" className="footer-logo" salt="Logo" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                mollis purus eu fringilla finibus. Iacushasellus sit amet elit eget
                mauris.
                </p>
                <div className="footer-social">
                   <a href="#"><img src="./facebook-logo.png" alt="logo-facebook" /></a>
                   <a href="#"><img src="./instagram-logo.png" alt="logo-instagram" /></a>
                   <a href="#"><img src="./x-logo.png" alt="logo-X" /></a>
                </div>
            </div>

            <div className="footer-section">
                <h3>Secciones</h3>
                <ul>
                <li>Reserva</li>
                <li>Blog</li>
                <li>Contacto</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Categorías</h3>
                <ul>
                <li>Económico</li>
                <li>Familiar</li>
                <li>Lujo</li>
                </ul>
            </div>

            <div className="footer-section footer-contact">
                <h3>Contacta</h3>
                <div className="contact-input">
                <input type="email" placeholder="email@email.com" />
                <button type="submit">
                    <span><img src="/flecha.png" alt="arrow" /></span>
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
