import React, { useState } from 'react';
import './Banner.scss';

const Banner = () => {
    const [emailSent, setEmailSent] = useState(false); // Estado para el mensaje de éxito
    const [email, setEmail] = useState(''); // Estado para el valor del input

    const handleEmailSubmit = (e) => {
        e.preventDefault(); // Evitar recarga de la página
        if (email) {
            setEmailSent(true); // Muestra el mensaje de éxito
            setEmail(''); // Limpia el campo de email
            setTimeout(() => setEmailSent(false), 3000); // Oculta el mensaje después de 3 segundos
        }
    };

    return (
        <section className="banner">
            <div className="container">
                <div className="wrapper-banner">
                    {/* Texto del banner */}
                    <div className="banner-text">
                        <h2 className="subtitle">Servicios Únicos</h2>
                        <ul>
                            <li>Proveemos seguro a todo riesgo sin costes ocultos</li>
                            <li>Devolución en diferentes sucursales al mismo precio</li>
                            <li>Entra en el club VIP para obtener beneficios únicos</li>
                        </ul>
                    </div>

                    {/* Formulario de email */}
                    <div className="email-container">
                        <p className="mini-titulo">Escribe tu email:</p>
                        <form onSubmit={handleEmailSubmit}>
                            <input
                                type="email"
                                className="email-input"
                                placeholder="email@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
                                required
                            />
                            <button type="submit" className="email-button">
                                Enviar
                            </button>
                        </form>
                        {emailSent && (
                            <p className="success-message">¡Email enviado exitosamente!</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
