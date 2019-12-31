import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Routes from './Routes';
import theme from './theme';

import './assets/scss/index.scss';

const browserHistory = createBrowserHistory();


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    )
  }
}
