import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Reserva.scss";
import "../styles/general.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import CochesDisponibles from "./CochesDisponibles";

const Reserva = () => {
  const location = useLocation();
  const { imagencar, carname, price, cardescription, disponible, precio } = location.state || {};

  // Estados
  const [isReserving, setIsReserving] = useState(false); // Controla la vista del formulario
  const [isReserved, setIsReserved] = useState(false); // Controla el mensaje de éxito

  // Muestra el formulario al hacer clic en "Reserva este coche"
  const handleReserveClick = () => {
    if (disponible === "Disponible") {
      setIsReserving(true);
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReserved(true); // Muestra el mensaje de éxito
  };

  return (
    <>
      <Nav />
      <section className="reserva">
        <div className="container">
          {/* Mostrar mensaje de éxito si el coche ha sido reservado */}
          {isReserved ? (
            <div className="success-message">
              <div className="container">
                <img src="/reservado.jpeg" alt="Coche reservado" />
                <h2>¡Coche reservado con éxito!</h2>
                <p>Gracias por confiar en nosotros. Pronto nos pondremos en contacto contigo.</p>
              </div>
            </div>
          ) : isReserving ? (
            // Formulario de reserva
            <div className="reservation-form">
              <h2>Reserva tu coche</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input type="text" id="nombre" placeholder="Introduce tu nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Introduce tu email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" placeholder="Introduce tu teléfono" required />
                </div>
                <div className="form-group">
                  <label htmlFor="fecha">Fecha de reserva</label>
                  <input type="date" id="fecha" required />
                </div>
                <button type="submit" className="btn btn-orange">
                  Confirmar reserva
                </button>
              </form>
            </div>
          ) : carname ? (
            // Detalles del coche
            <div className="car-details">
              <img src={imagencar} alt={carname} className="car-image" />
              <div className="description-wrapper">
                <h2>{carname}</h2>
                <p>
                  <strong>Descripción:</strong> {cardescription}
                </p>
                <p>
                  <strong>Disponibilidad:</strong>{" "}
                  <span
                    style={{
                      color: disponible === "Disponible" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {disponible}
                  </span>
                </p>
                <p>
                  <strong>Precio:</strong> {precio}
                </p>
                <button
                  className={`btn ${disponible === "Disponible" ? "btn-orange" : "btn-disabled"}`}
                  onClick={handleReserveClick}
                  disabled={disponible !== "Disponible"}
                >
                  Reserva este coche
                </button>
              </div>
            </div>
          ) : (
            <CochesDisponibles />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Reserva;
