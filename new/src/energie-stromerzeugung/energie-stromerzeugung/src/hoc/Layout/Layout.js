import React, {Component} from 'react';

import SideDrawer from '../../containers/Navigation/Nav/SideDrawer/SideDrawer';
import Toolbar from '../../containers/Navigation/Nav/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';

class Layout extends Component{

   state = {
      showSideDrawer: false
   }

   sideDrawerClosedHandler = () =>{
      this.setState({showSideDrawer: false } );
   }

   sideDrawerToggleHandler = () => {
      this.setState((prevState) => {
         return {showSideDrawer: !prevState.showSideDrawer};
      });
   }

   render() {
      return(
         <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
               {this.props.children}
            </main>
         </Aux>
      );
   }

}

export default Layout;