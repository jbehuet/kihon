import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class SideNav extends Component {

  constructor(){
    super();
  }

  handleChange() {
      this.props.onRequestChange(this.props.open)
  }

  render() {
      return (
          <Drawer
              docked={false} width={200} open={this.props.open}
              onRequestChange={this.handleChange.bind(this)}>

              <MenuItem onTouchTap={this.handleChange.bind(this)}>Accueil</MenuItem>
              <MenuItem onTouchTap={this.handleChange.bind(this)}>A propos</MenuItem>

          </Drawer>
      );
  }
}

export default SideNav
