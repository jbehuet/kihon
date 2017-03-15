import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SideNav from './SideNav';

class Header extends Component {

  constructor(){
    super();
    this.state = {open: false};
  }

  handleLeftIconButtonTouchTap(event) {
      this.setState({
          open: !this.state.open
      });
  }

  render() {
      return (
          <div>
              <SideNav
                open={this.state.open}
                onRequestChange={this.handleLeftIconButtonTouchTap.bind(this)}>
              </SideNav>
              <AppBar
                title="Aikido - 合気道"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap.bind(this)}>
              </AppBar>
          </div>
      )
  }

}

export default Header
