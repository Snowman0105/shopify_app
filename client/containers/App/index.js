import React, { Component} from 'react';
import { Page } from '@shopify/polaris';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { EmbeddedApp } from '@shopify/polaris/embedded';
import saga from './redux/saga';
// import injectReducer from '../../../client/utils/injectReducer';
import injectSaga from '~/utils/injectSaga';
import LoginPage from '~/modules/Auth';

class App extends Component {
  render() {
    const { apiKey, shopOrigin } = window;
    return (
      <div className="main-app" style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center' }}>
        <EmbeddedApp shopOrigin={shopOrigin} apiKey={apiKey}>
          <LoginPage />
        </EmbeddedApp>
      </div>
    );
  }
}

const withConnect = connect();
const withSaga = injectSaga({key: 'app', saga});

export default withRouter(compose(
  withSaga,
  withConnect,
)(App));
