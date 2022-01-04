import React, {Component} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {Row} from 'react-bootstrap';

import './NavItems.css';

class NavItems extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <div className="Background"/>
                    <h1 className="Title">Energie Stromerzeugung</h1>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/energie-stromerzeugung/home/"
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
                <Outlet/>
                <Row className="Footer">
                </Row>
            </div>
        );
    }
}

export default NavItems;