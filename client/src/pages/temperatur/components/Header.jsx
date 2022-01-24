import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">AB20c</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Energie Stromerzeugung</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Klima</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Lineare Funktionen
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Lineare Funktionen</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" to="#">Unterseite 1</Link></li>
                                    <li><Link className="dropdown-item" to="#">Unterseite 2</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Lineare Gleichungen</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="#">Temperatur</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Vektoren</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>);
};

export default Header;
