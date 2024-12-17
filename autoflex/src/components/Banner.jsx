import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="wrapper-banner">
                    <div className="banner-text">
                        <h2 className="subtitle">Servicios Únicos</h2>
                        <ul>
                            <li>Proveemos seguro a todo riesgo sin costes ocultos</li>
                            <li>Devolución en diferentes sucursales al mismo precio</li>
                            <li>Entra en el club VIP para obener beneficios únicos</li>
                        </ul>
                    </div>
                    <div className="email-container">
                        <p className="mini-titulo">Escribe tu email:</p>
                        <input
                            type="email"
                            className="email-input"
                            placeholder="email@email.com"
                        />
                        <button type="submit" className="email-button">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;