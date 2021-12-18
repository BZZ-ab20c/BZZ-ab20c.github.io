import React from 'react';

import './NavItems.css';
import NavItem from 'NavItem/NavItem';

const navigationItems = () => (
    <ul className="">
        <NavItem link="/" exact>Home</NavItem>
        <NavItem link="/orders">Generator</NavItem>
        <NavItem link="/orders">Wasserkraftwerk</NavItem>
        <NavItem link="/orders">Solar</NavItem>
        <NavItem link="/orders">Kraftwerk</NavItem>
    </ul>
);

export default navigationItems;