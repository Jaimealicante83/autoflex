import React from 'react';
import './Experiencia.scss';
import { Link } from "react-router-dom";

const Experiencia = (props) => {
    return (
        <section className="experiencia">
            <div className="container">
                <div className="title-experiencia-wrapper">
                    <h2 className="subtitle">Coches para una experiencia increíble</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu fringilla finibus.
                        Aliquam at mauris aliquam, vestibulum mi id, dignissim lacus. Phasellus sit amet elit eget mauris  
                        dignissim lacus. Phasellus sit amet elit eget mauris </p>
                    <Link to="/reserva"><button className="btn btn-orange">Reserva ahora</button></Link>
                </div>
                <div className="imagen-card-wrapper">
                    <img src={props.fotoCoche} alt={props.descripcionFotoCoche} />
                    <div className="card-experiencia">
                        <img src="./icono-coche.png" alt="Icono coche" />
                        <h3>Una flota de coches para todos los bolsillos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus eu fringilla 
                        finibus. Aliquam at mauris aliquam, vestibulum mi id, dignissim lacus. Phasellus sit amet elit eget mauris</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiencia;