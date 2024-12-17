import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  const navigate = useNavigate();

  // Manejar la navegación al hacer clic en el botón
  const handleReservaClick = () => {
    navigate("/reserva", {
      state: {
        disponible: props.disponible,
        imagencar: props.imagencar,
        carname: props.carname,
        price: props.price,
        cardescription: props.cardescription,
        precio: props.precio,
      },
    });
  };

  return (
    <section className="card">
      <p
        className="disponible"
        style={{ color: props.disponible === "Disponible" ? "#28A745" : "#FF5252" }}
      >
        {props.disponible}
      </p>
      <img src={`/${props.imagencar}`} alt={props.carname} />

      <div className="name-wrapper">
        <h3>{props.carname}</h3>
        <p className="price">{props.price}</p>
      </div>
      <p className="parrafo-descripcion">{props.cardescription}</p>
      <div className="precio-wrapper">
        <p className="precio">{props.precio}</p>
        <button className="btn btn-orange-sm" onClick={handleReservaClick}>
          Reserva ahora
        </button>
      </div>
    </section>
  );
};

export default Card;
