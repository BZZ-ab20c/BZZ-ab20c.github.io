import React, { Component } from 'react';
import {
    Route, Routes, NavLink
} from 'react-router-dom';

import Footer from '../../../../styles/energie-stromerzeugung/Footer/Footer.css';
import {Row, Col} from 'react-bootstrap';
import Home from '../../energie-components/Home/Home';
import { Generator } from '../../energie-components/Generator/Generator';
import { Solar } from '../../energie-components/Solar/Solar';
import { Kernkraftwerk } from '../../energie-components/Kernkraftwerk/Kernkraftwerk';
import { Wasserkraftwerk } from '../../energie-components/Wasserkraftwerk/Wasserkraftwerk';

import './NavItems.css';

class NavItems extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                <div className="Background" />
                <h1 className="Title">Energie Stromerzeugung</h1>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/energie-stromerzeugung/home/"
                                exact
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/generator/"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Generator</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/wasserkraftwerk/"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Wasserkraftwerk</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/solar/"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Solar</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/kernkraftwerk/"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Kernkraftwerk</NavLink></li>
                        </ul>
                    </nav>
                </header>
                    <Routes>
                        <Route path="/energie-stromerzeugung/kernkraftwerk" element={<Kernkraftwerk />} />
                        <Route path="/energie-stromerzeugung/solar" element={<Solar />} />
                        <Route path="/energie-stromerzeugung/wasserkraftwerk" element={<Wasserkraftwerk />} />
                        <Route path="/energie-stromerzeugung/generator" element={<Generator />} />
                        <Route path="/energie-stromerzeugung/home" exact element={<Home />} />
                    </Routes>
                <Row className="Footer">
                </Row>
            </div>
        );
    }
}

export default NavItems;