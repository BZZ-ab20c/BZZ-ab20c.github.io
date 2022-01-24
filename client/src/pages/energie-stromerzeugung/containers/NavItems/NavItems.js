import React, {Component} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {Row} from 'react-bootstrap';

import './NavItems.css';

class NavItems extends Component {
    render() {
        const navStyle = {
            color: '#fa923f',
            textDecoration: 'none'
        }

        /*const button = {
            color: '#00000005',
            textDecoration: 'none'
        }*/

        return (
            <div className="Blog">
                <header>
                    <div className="Background"/>
                    <h1 className="Title">Energie Stromerzeugung</h1>
                    <br/>

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
                            <li>
                                <p className="button">
                                    <a target="_blank" href="https://create.kahoot.it/details/b38172d7-ffa8-4c96-9671-22c86dbc41f9">Quiz</a>                      
                                </p>
                            </li>
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