import React from 'react';

import './NavItems.css';
import NavItem from "./NavItem/NavItem";

const navigationItems = () => (
    <ul className="">
        <NavItem link="/" exact>Home</NavItem>
        <NavItem link="/generator">Generator</NavItem>
        <NavItem link="/wasserkraft">Wasserkraftwerk</NavItem>
        <NavItem link="/solar">Solar</NavItem>
        <NavItem link="/kraftwerk">Kraftwerk</NavItem>
    </ul>
);

export default navigationItems;