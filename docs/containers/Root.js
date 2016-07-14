import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
import '../global.css';

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {routes()}
      </Router>
    );
  }
}

export default Root;
