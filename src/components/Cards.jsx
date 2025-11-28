import React from 'react';
import './Cards.css';
import icon1 from '../assets/Frame 481008016.svg';
import icon2 from '../assets/Frame 481008017.svg';
import icon3 from '../assets/Frame 481008018.svg';

export default function Cards() {
    return (
        <div className="cards-container" data-name="cards">
            <div className="cards-wrapper">
                {/* Tarjeta 1: Transparencia */}
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon-wrapper">
                            <img src={icon1} alt="Icono Transparencia" />
                        </div>
                        <p className="card-text">
                            <span>“Transparencia y </span>lucha contra la corrupción”
                        </p>
                    </div>
                </div>

                {/* Tarjeta 2: Innovación */}
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon-wrapper">
                            <img src={icon2} alt="Icono Innovación" />
                        </div>
                        <p className="card-text">
                            <span>“Innovación constante </span>en procesos digitales”
                        </p>
                    </div>
                </div>

                {/* Tarjeta 3: Seguridad */}
                <div className="card card-green">
                    <div className="card-content">
                        <div className="card-icon-wrapper">
                            <img src={icon3} alt="Icono Seguridad" />
                        </div>
                        <p className="card-text">
                            <span>“Seguridad integral </span>para todos los usuarios”
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
