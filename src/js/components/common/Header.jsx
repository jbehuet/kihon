import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import SideNav from './SideNav';
import IconButton from 'material-ui/IconButton';
import ViewList from 'material-ui/svg-icons/action/view-list';
import ViewModule from 'material-ui/svg-icons/action/view-module';

const styles = {
    header: {
        position: "fixed",
        top: 0
    }
};

class Header extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            list: false
        };
    }

    handleLeftIconButtonTouchTap(event) {
        this.setState({
            open: !this.state.open
        });
    }

    handleRightIconButtonTouchTap(event) {
        this.setState({
            list: !this.state.list
        });
        this.props.onClickChangeView();
    }

    handleChangeKyu(kyu) {
      this.props.onChangeKyu(kyu)
      this.setState({
          open: !this.state.open
      });
    }

    render() {
        const rightButton = (this.state.list ? <ViewModule /> : <ViewList />);
        return (
            <div>
                <SideNav open={this.state.open}
                          onRequestChange={this.handleLeftIconButtonTouchTap.bind(this)}
                          onChangeKyu={this.handleChangeKyu.bind(this)}></SideNav>
                <AppBar title="Aikido - 合気道" style={styles.header}
                        iconElementRight={<IconButton>{rightButton}</IconButton>}
                        onRightIconButtonTouchTap={this.handleRightIconButtonTouchTap.bind(this)}
                        onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap.bind(this)}></AppBar>
            </div>
        )
    }

}

export default Header
