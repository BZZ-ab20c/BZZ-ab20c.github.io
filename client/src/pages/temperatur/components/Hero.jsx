import React from 'react';
import Thermometer from '../img/thermometer.png'

const Hero = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">

                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <h1>Temperatur</h1>
                    <img src={Thermometer} className="img-fluid hero-img" width="40%" height="" alt="" />
                </div>

            </section>
        </>)
        ;
};

export default Hero;
