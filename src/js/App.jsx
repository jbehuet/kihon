/* jshint ignore:start */
import style from '../scss/main.scss'; //require style
/* jshint ignore:end */

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//Components
import Main from './components/Main';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#AB232F',
    primary2Color: '#AB232F',
    primary3Color: '#AB232F',
    accent1Color: '#004354',
    accent2Color: '#004354',
    accent3Color: '#004354',
    textColor: '#004354',
    alternateTextColor: '#FFFFFF'
  }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={hashHistory}>
        <Route path="/" component={Main}></Route>
    </Router>
</MuiThemeProvider>, document.getElementById('app'));
