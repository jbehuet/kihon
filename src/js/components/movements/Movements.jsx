import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Techniques from './Techniques';

const styles = {
    container: {
        marginTop: '64px',
        backgroundImage: "url('images/bg3.png')",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }
};

class Movements extends Component {

    constructor() {
        super();
        this.state = {
            list: false
        };
    }

    handleChangeDisplay(event) {
        this.setState({
            list: !this.state.list
        });
    }

    render() {
        return (
          <Tabs style={styles.container}>
            <Tab label="Techniques">
              <Techniques list={this.state.list}></Techniques>
            </Tab>
            <Tab label="Attaques">
            </Tab>
          </Tabs>
        );
    }

}

export default Movements
