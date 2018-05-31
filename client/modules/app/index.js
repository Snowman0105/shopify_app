import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import injectReducer from '~/utils/injectReducer';
import injectSaga from '~/utils/injectSaga';
import { Container } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import Dashboard from './dashboard';

class App extends Component {
  Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    )
  }

  render() {
    return (
      <div className="main-app">
        <Container className="app-container">
          {this.Routes()}
        </Container>
      </div>
    );
  }
}

export default App;
