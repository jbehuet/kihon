import React, {Component} from 'react';
import Header from './common/Header';
import {Tabs, Tab} from 'material-ui/Tabs';
import Techniques from './movements/Techniques';

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
        return (
            <div style={styles.app}>
                <Header onClickChangeView={this.handleChangeDisplay.bind(this)} onChangeKyu={this.handleChangeKyu.bind(this)}></Header>
                  <Tabs style={styles.container}>
                    <Tab label="Techniques">
                      <Techniques list={this.state.list} kyu={this.state.kyu}></Techniques>
                    </Tab>
                    <Tab label="Attaques">
                    </Tab>
                  </Tabs>
            </div>
        );
    }

}

export default Main
