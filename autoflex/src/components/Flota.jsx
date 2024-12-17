import React from 'react';
import { Link } from "react-router-dom";
import './Flota.scss';

const Flota = () => {
  return (
    <section className="flota">
      <div className="container">
        <div className="wrapper-text">
          <div className="container-text">
            <h6>Car rental</h6>
            <h2 className="subtitle">Disponemos de una flota adaptada a todas las necesidades</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu fringilla finibus.
              Aliquam at mauris aliquam, vestibulum mi id, dignissim lacus. Phasellus sit amet elit eget mauris varius
              dignissim eu ut augue. Nam tempus pellentesque dolor et ornare. Morbi vestibulum venenatis libero elementum
              fringilla.
            </p>
            <Link to="/reserva"><button className="btn btn-orange">Reserva ahora</button></Link>
          </div>
          <img className="image-mercedes" src="flota-mercedes.jpg" alt="Mercedes" />
        </div>
    
        <div className="image-grid-container">
          <div className="image-grid">
            <img src="flota-juke.jpg" alt="Nissan Juke" />
            <img src="flota-fiesta.jpg" alt="Ford Fiesta" />
          </div>
          <div className="image-grid">
            <img src="flota-kia.jpg" alt="Kia Ceed" />
            <img src="flota-conductor.jpg" alt="Conductor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flota;
