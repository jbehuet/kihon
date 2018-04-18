import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ViewList from 'material-ui/svg-icons/action/view-list';
import ViewModule from 'material-ui/svg-icons/action/view-module';

import SideNav from './SideNav';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      list: false,
    };
    this.handleLeftIconButtonTouchTap = this.handleLeftIconButtonTouchTap.bind(this);
    this.handleRightIconButtonTouchTap = this.handleRightIconButtonTouchTap.bind(this);
    this.handleChangeKyu = this.handleChangeKyu.bind(this);
  }

  handleLeftIconButtonTouchTap() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleRightIconButtonTouchTap() {
    this.setState({
      list: !this.state.list,
    });
    this.props.onClickChangeView();
  }

  handleChangeKyu() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { displayChangeViewIcon, isMobile } = this.props;
    const rightButton = (this.state.list ? <ViewModule /> : <ViewList />);
    return (
      <div>
        <SideNav
          open={this.state.open}
          onRequestChange={this.handleLeftIconButtonTouchTap}
          onChangeKyu={this.handleChangeKyu}
          isMobile={isMobile}
        />
        <AppBar
          title={(isMobile ? 'Aikido - 合気道' : '')}
          style={{ position: 'fixed', top: 0, paddingLeft: (!isMobile ? '210px' : '24px') }}
          iconElementRight={displayChangeViewIcon ? <IconButton>{rightButton}</IconButton> : null}
          onRightIconButtonTouchTap={this.handleRightIconButtonTouchTap}
          onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
          iconStyleLeft={{ display: (!isMobile ? 'none' : '') }}
        />
      </div>
    );
  }
}

Header.propTypes = {
  displayChangeViewIcon: PropTypes.bool.isRequired,
  onClickChangeView: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
