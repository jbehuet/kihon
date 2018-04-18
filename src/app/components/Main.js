import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      list: false,
      isMobile: false,
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
  }

  componentWillMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    const isMobile = window.innerWidth <= 500;
    if (this.state.isMobile !== isMobile) {
      this.setState({ isMobile });
    }
  }

  handleChangeDisplay() {
    this.setState({
      list: !this.state.list,
    });
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <div style={{ height: '100%' }}>
        <Header
          displayChangeViewIcon={(pathname === '/')}
          onClickChangeView={this.handleChangeDisplay}
          isMobile={this.state.isMobile}
        />
        <div style={{ paddingLeft: (!this.state.isMobile ? '200px' : '0px') }}>
          {React.cloneElement(this.props.children, { list: this.state.list })}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

export default Main;
