import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavItems/NavItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
   <header className={classes.Toolbar}>
      <DrawerToogle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
      </div>
      <nav className={classes.DesktopOnly}>
         <NavigationItems />
      </nav>
   </header>
);

export default toolbar;