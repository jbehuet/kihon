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
    }

    render() {
        return (
          <Tabs style={styles.container}>
            <Tab label="Techniques">
              <Techniques list={this.props.list} isTechniques="true"></Techniques>
            </Tab>
            <Tab label="Attaques">
              <Techniques list={this.props.list}></Techniques>
            </Tab>
          </Tabs>
        );
    }

}

export default Movements
