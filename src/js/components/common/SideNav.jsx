import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';

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
    checkbox: {
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

    handleChange() {
        this.props.onRequestChange(this.props.open)
    }

    render() {
        return (
            <Drawer docked={false} width={200} open={this.props.open} onRequestChange={this.handleChange.bind(this)}>

                <MenuItem style={styles.header} disabled={true}>Aikido - 合気道</MenuItem>
                <MenuItem onTouchTap={this.handleChange.bind(this)}>Accueil</MenuItem>
                <Divider/>
                <MenuItem disabled={true}>Filtre</MenuItem>
                <Subheader>Immobilisations</Subheader>
                <Checkbox label="5e Kyu" checkedIcon={<img src='images/belts/5e_kyu.png' width="24"/>} uncheckedIcon={<img src='images/belts/6e_kyu.png' width="24"/>} style={styles.checkbox}/>
                <Checkbox label="4e Kyu" checkedIcon={<img src='images/belts/4e_kyu.png' width="24"/>} uncheckedIcon={<img src='images/belts/6e_kyu.png' width="24"/>} style={styles.checkbox}/>
                <Checkbox label="3e Kyu" checkedIcon={<img src='images/belts/3e_kyu.png' width="24"/>} uncheckedIcon={<img src='images/belts/6e_kyu.png' width="24"/>} style={styles.checkbox}/>
                <Checkbox label="2e Kyu" checkedIcon={<img src='images/belts/2e_kyu.png' width="24"/>} uncheckedIcon={<img src='images/belts/6e_kyu.png' width="24"/>} style={styles.checkbox}/>
                <Checkbox label="1e Kyu" checkedIcon={<img src='images/belts/1e_kyu.png' width="24"/>} uncheckedIcon={<img src='images/belts/6e_kyu.png' width="24"/>} style={styles.checkbox}/>
                <RaisedButton label="Appliquer" primary={true} style={styles.button}/>
                <Divider/>
                <MenuItem>A propos</MenuItem>
                <div style={styles.footer}>© 2017 - Images propriétées de la FFAAA</div>

            </Drawer>
        );
    }
}

export default SideNav
