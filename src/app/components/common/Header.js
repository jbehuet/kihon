import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ViewList from 'material-ui/svg-icons/action/view-list';
import ViewModule from 'material-ui/svg-icons/action/view-module';

import SideNav from './SideNav';

const styles = {
  header: {
    position: 'fixed',
    top: 0,
  },
};

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
    const { displayChangeViewIcon } = this.props;
    const rightButton = (this.state.list ? <ViewModule /> : <ViewList />);
    return (
      <div>
        <SideNav
          open={this.state.open}
          onRequestChange={this.handleLeftIconButtonTouchTap}
          onChangeKyu={this.handleChangeKyu}
        />
        <AppBar
          title="Aikido - 合気道"
          style={styles.header}
          iconElementRight={displayChangeViewIcon ? <IconButton>{rightButton}</IconButton> : null}
          onRightIconButtonTouchTap={this.handleRightIconButtonTouchTap}
          onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
        />
      </div>
    );
  }
}

Header.propTypes = {
  displayChangeViewIcon: PropTypes.bool.isRequired,
  onClickChangeView: PropTypes.func.isRequired,
};

export default Header;
