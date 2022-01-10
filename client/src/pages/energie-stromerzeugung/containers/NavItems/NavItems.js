import React, {Component} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {Row} from 'react-bootstrap';

import './NavItems.css';

class NavItems extends Component {
    render() {
        const navStyle = {
            color: '#fa923f',
            textDecoration: 'underline'
        }

        return (
            <div className="Blog">
                <header>
                    <div className="Background"/>
                    <h1 className="Title">Energie Stromerzeugung</h1>
                    <nav>
                        <ul>
                            <li><NavLink end to="/energie-stromerzeugung"
                                activeStyle={navStyle}>Home</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/generator/"
                                activeStyle={navStyle}>Generator</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/wasserkraftwerk/"
                                activeStyle={navStyle}>Wasserkraftwerk</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/solar/"
                                activeStyle={navStyle}>Solar</NavLink></li>
                            <li><NavLink
                                to="/energie-stromerzeugung/kernkraftwerk/"
                                activeStyle={navStyle}>Kernkraftwerk</NavLink></li>
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