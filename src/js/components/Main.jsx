import React, { Component } from 'react';
import Header from './common/Header';
import Movements from './movements/Movements';

const styles = {
    app: {
      height: '100%',
    },
    container: {
        textAlign: 'center',
        backgroundImage: "url('images/bg2.png')",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }
};

class Main extends Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    handleRequestClose(event) {
        this.setState({open: false});
    }

    handleTouchTap(event) {
        this.setState({open: true});
    }

    render() {
        return (
            <div style={styles.app}>
                <Header></Header>
                <div style={styles.container}>
                    <Movements></Movements>
                </div>
            </div>
        );
    }

}

export default Main
