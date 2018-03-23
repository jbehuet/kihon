import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import { Actions } from '../../actions/MovementsActions';

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
    },
    link: {
        display: 'block'
    },
    filter: {
        padding: '0px'
    }
}
@connect()
class SideNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filter: '0'
        };
    }

    handleRequestChange() {
        this.props.onRequestChange(this.props.open)
    }

    handleChangeKyu(event, value) {
        this.setState({ filter: value })
        this.props.dispatch(Actions.fetchFiltred(value))
        this.props.onChangeKyu()
    }

    render() {
        const { location } = this.props.router
        const { filter } = this.state;
        return (
            <Drawer docked={false} width={200} open={this.props.open} onRequestChange={this.handleRequestChange.bind(this)}>

                <MenuItem style={styles.header} disabled={true}>Aikido - 合気道</MenuItem>
                <MenuItem onTouchTap={this.handleRequestChange.bind(this)}><Link to="/" style={styles.link}>Accueil</Link></MenuItem>
                <Divider />
                <List style={styles.filter}>
                    <ListItem
                        primaryText="Filtre"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <RadioButtonGroup key={1} name="belts" defaultSelected={filter} onChange={this.handleChangeKyu.bind(this)} style={styles.radio}>
                                <RadioButton value="5" label="5e Kyu" checkedIcon={< img src='images/belts/5e_kyu.png' width="24" />} uncheckedIcon={< img src='images/belts/none.png' width="24" />} />
                                <RadioButton value="4" label="4e Kyu" checkedIcon={< img src='images/belts/4e_kyu.png' width="24" />} uncheckedIcon={< img src='images/belts/none.png' width="24" />} />
                                <RadioButton value="3" label="3e Kyu" checkedIcon={< img src='images/belts/3e_kyu.png' width="24" />} uncheckedIcon={< img src='images/belts/none.png' width="24" />} />
                                <RadioButton value="2" label="2e Kyu" checkedIcon={< img src='images/belts/2e_kyu.png' width="24" />} uncheckedIcon={< img src='images/belts/none.png' width="24" />} />
                                <RadioButton value="1" label="1e Kyu" checkedIcon={< img src='images/belts/6e_kyu.png' width="24" />} uncheckedIcon={< img src='images/belts/none.png' width="24" />} />
                                <RadioButton value="0" label="Shodan" checkedIcon={< img src='images/belts/1e_dan.png' width="24" />} uncheckedIcon={< img src='images/belts/none.png' width="24" />} />
                            </RadioButtonGroup>
                        ]}
                    />
                </List>
                <Divider />
                <MenuItem onTouchTap={this.handleRequestChange.bind(this)}><Link to="/about" style={styles.link}>A propos</Link></MenuItem>
                <div style={styles.footer}>© 2018 - Images propriétées de la FFAAA</div>

            </Drawer>
        );
    }
}

export default withRouter(SideNav)
