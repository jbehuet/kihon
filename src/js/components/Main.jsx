import React, {Component} from 'react';
import Header from './common/Header';
import Movements from './movements/Movements';

const styles = {
    app: {
        height: '100%'
    },
    container: {
        marginTop: '64px',
        backgroundImage: "url('images/bg3.png')",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }
};

class Main extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            list: false,
            kyu: 0
        };
    }

    handleRequestClose(event) {
        this.setState({open: false});
    }

    handleTouchTap(event) {
        this.setState({open: true});
    }

    handleChangeDisplay(event) {
        this.setState({
            list: !this.state.list
        });
    }

    handleChangeKyu(kyu) {
        this.setState({kyu});
    }

    render() {
        const containerStyle = (this.state.list ? {...styles.container} : {...styles.container, textAlign: 'center'});
        return (
            <div style={styles.app}>
                <Header onClickChangeView={this.handleChangeDisplay.bind(this)} onChangeKyu={this.handleChangeKyu.bind(this)}></Header>
                <div style={containerStyle}>
                    <Movements list={this.state.list} kyu={this.state.kyu}></Movements>
                </div>
            </div>
        );
    }

}

export default Main
