import React, {Component} from 'react';

import SideDrawer from '../../../containers/energie-stromerzeugung/Navigation/Nav/SideDrawer/SideDrawer';
import Toolbar from '../../../containers/energie-stromerzeugung/Navigation/Nav/Toolbar/Toolbar';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={"content"}>
                    {this.props.children}
                </main>
            </aux>
        );
    }

}

export default Layout;