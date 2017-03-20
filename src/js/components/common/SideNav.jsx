import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    header: {
        color: '#fff',
        background: '#AB232F',
        lineHeight: '64px',
        height: '64px',
        fontSize: '20px',
        fontWeight: '300'
    },
    footer: {
        color: '#c2c2c2',
        fontSize: '9px',
        padding: '0px 16px',
        lineHeight: '48px'
    },
    radio: {
        marginLeft: '16px'
    },
    button: {
        margin: '16px 16px'
    }
}

class SideNav extends Component {

    constructor() {
        super();
    }

    handleRequestChange() {
        this.props.onRequestChange(this.props.open)
    }

    handleChangeKyu(event, value){
      this.props.onChangeKyu(value)
    }

    render() {
        return (
            <Drawer docked={false} width={200} open={this.props.open} onRequestChange={this.handleRequestChange.bind(this)}>

                <MenuItem style={styles.header} disabled={true}>Aikido - 合気道</MenuItem>
                <MenuItem onTouchTap={this.handleRequestChange.bind(this)}>Accueil</MenuItem>
                <Divider/>
                <MenuItem disabled={true}>Filtre</MenuItem>
                <RadioButtonGroup name="belts" defaultSelected="0" onChange={this.handleChangeKyu.bind(this)}>
                    <RadioButton value="5" label="5e Kyu" checkedIcon={< img src = 'images/belts/5e_kyu.png' width = "24" />} uncheckedIcon={< img src = 'images/belts/6e_kyu.png' width = "24" />} style={styles.radio}/>
                    <RadioButton value="4" label="4e Kyu" checkedIcon={< img src = 'images/belts/4e_kyu.png' width = "24" />} uncheckedIcon={< img src = 'images/belts/6e_kyu.png' width = "24" />} style={styles.radio}/>
                    <RadioButton value="3" label="3e Kyu" checkedIcon={< img src = 'images/belts/3e_kyu.png' width = "24" />} uncheckedIcon={< img src = 'images/belts/6e_kyu.png' width = "24" />} style={styles.radio}/>
                    <RadioButton value="2" label="2e Kyu" checkedIcon={< img src = 'images/belts/2e_kyu.png' width = "24" />} uncheckedIcon={< img src = 'images/belts/6e_kyu.png' width = "24" />} style={styles.radio}/>
                    <RadioButton value="1" label="1e Kyu" checkedIcon={< img src = 'images/belts/1e_kyu.png' width = "24" />} uncheckedIcon={< img src = 'images/belts/6e_kyu.png' width = "24" />} style={styles.radio}/>
                    <RadioButton value="0" label="1e Dan" checkedIcon={< img src = 'images/belts/1e_dan.png' width = "24" />} uncheckedIcon={< img src = 'images/belts/6e_kyu.png' width = "24" />} style={styles.radio}/>
                </RadioButtonGroup>
                <Divider/>
                <MenuItem>A propos</MenuItem>
                <div style={styles.footer}>© 2017 - Images propriétées de la FFAAA</div>

            </Drawer>
        );
    }
}

export default SideNav
