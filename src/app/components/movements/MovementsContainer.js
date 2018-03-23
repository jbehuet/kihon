import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux';
import Movements from './Movements';

import { Actions, Tabs as MovementsTabs } from '../../actions/MovementsActions';

const styles = {
    container: {
        marginTop: '64px',
        backgroundImage: "url('images/bg3.png')",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }
};

@connect((store) => {
    return { movements: store.movements }
})
class MovementsContainer extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(tab) {
        this.props.dispatch(Actions.selectTab(tab));
    }

    render() {
        const { selectedTab } = this.props.movements;
        return (
            <Tabs style={styles.container} value={selectedTab} onChange={this.handleChange}>
                {Object.keys(MovementsTabs).map(k => {
                    return (
                        <Tab key={k} value={MovementsTabs[k]} label={MovementsTabs[k]}>
                            <Movements list={this.props.list} isTechniques={MovementsTabs[k] === MovementsTabs.TECHNIQUES}></Movements>
                        </Tab>
                    )
                })}
            </Tabs>
        );
    }

}

export default MovementsContainer
