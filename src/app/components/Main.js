import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

const styles = {
  app: {
    height: '100%',
  },
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      list: false,
    };
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
  }

  handleChangeDisplay() {
    this.setState({
      list: !this.state.list,
    });
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <div style={styles.app}>
        <Header
          displayChangeViewIcon={(pathname === '/')}
          onClickChangeView={this.handleChangeDisplay}
        />
        {React.cloneElement(this.props.children, { list: this.state.list })}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

export default Main;
