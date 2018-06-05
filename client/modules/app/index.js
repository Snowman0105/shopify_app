import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import injectReducer from '~/utils/injectReducer';
import injectSaga from '~/utils/injectSaga';
import { Container } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import reducer from './redux/reducers';
import saga from './redux/saga';
import MsgTrigger from './triggers/MessagesPage';

class App extends Component {
  Routes() {
    return (
      <Switch>
        <Route exact path="/" component={MsgTrigger} />
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
const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default withRouter(compose(
    withReducer,
    withSaga,
    withConnect,
)(App));
