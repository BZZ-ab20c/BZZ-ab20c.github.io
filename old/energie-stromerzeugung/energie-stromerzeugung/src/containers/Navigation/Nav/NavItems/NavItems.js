import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

export const navigationItems = () => (
    <ul className="">
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/orders">Generator</NavigationItem>
        <NavigationItem link="/orders">Wasserkraftwerk</NavigationItem>
        <NavigationItem link="/orders">Solar</NavigationItem>
        <NavigationItem link="/orders">Kraftwerk</NavigationItem>
    </ul>
);