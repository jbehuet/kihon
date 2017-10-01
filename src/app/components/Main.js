import React, {Component} from 'react';
import Header from './common/Header';

const styles = {
    app: {
        height: '100%'
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
        this.setState({open: false});
    }

    render() {
        return (
            <div style={styles.app}>
                <Header onClickChangeView={this.handleChangeDisplay.bind(this)} onChangeKyu={this.handleChangeKyu.bind(this)}></Header>
                {React.cloneElement(this.props.children, {list: this.state.list})}
            </div>
        );
    }
}

export default Main
