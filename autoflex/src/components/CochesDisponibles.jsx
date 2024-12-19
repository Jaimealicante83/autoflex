import React from 'react';
import './CochesDisponibles.scss';
import Card from './Card';

const CochesDisponibles = () => {
    return (
        <section className="coches-disponibles">
            <div className="container">
                <h2 className="subtitle">Nuestros Coches</h2>
                <div className="cards-container">
                    <Card disponible="Disponible" imagencar="aygo2.png" carname="Toyota Aygo" cardescription="Motor de 1.0 litros con 72 CV, consumo combinado de 4.8 l/100 km. Compacto urbano con diseño moderno y eficiente en combustible." precio="35€" />
                    <Card disponible="Disponible" imagencar="fiesta2.png" carname="Ford Fiesta" cardescription="Motor de 1.1 litros con 75 CV, consumo combinado de 5.0 l/100 km. Utilitario ágil y eficiente, ideal para conducción urbana. " precio="45€" />
                    <Card disponible="Disponible" imagencar="kiaceed.png" carname="Kia Ceed" cardescription="Motor de 1.0 litros T-GDi con 120 CV, consumo combinado de 5.7 l/100 km. Compacto versátil con buen equipamiento y rendimiento equilibrado." precio="55€" />
                    <Card disponible="No disponible" imagencar="octavia2.png" carname="Skoda Octavia" Octavia cardescription="Motor de 1.5 litros TSI con 150 CV, consumo combinado de 5.0 l/100 km. Sedán espacioso y eficiente, perfecto para viajes largos." precio="70€" />
                    <Card disponible="Disponible" imagencar="golf.png" carname="Volkswagen Golf" Golf cardescription="Motor de 1.5 litros TSI con 130 CV, consumo combinado de 4.9 l/100 km. Ícono compacto que combina tecnología avanzada y eficiencia." precio="65€" />
                    <Card disponible="Disponible" imagencar="juke2.png" carname="Nissan Juke" cardescription="Motor de 1.0 litros DIG-T con 117 CV, consumo combinado de 5.8 l/100 km. Crossover compacto con diseño distintivo y conducción dinámica." precio="80€" />
                    <Card disponible="No disponible" imagencar="tesla.png" carname="Tesla S" cardescription="Autonomía de hasta 652 km, aceleración de 0 a 100 km/h en 3.2 segundos. Sedán eléctrico premium con rendimiento excepcional y tecnología de vanguardia." precio="125€" />
                    <Card disponible="Disponible" imagencar="mercedes-convertible2.png" carname="Mercedes Clase C" cardescription="Motor de 2.0 litros con 184 CV, consumo combinado de 6.8 l/100 km. Descapotable elegante que ofrece una experiencia de conducción lujosa y deportiva" precio="200€" />

                </div>
            </div>
        </section>
    );
};

export default CochesDisponibles;