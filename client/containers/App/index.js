import React, { Component} from 'react';
import { Page } from '@shopify/polaris';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { EmbeddedApp } from '@shopify/polaris/embedded';
import injectReducer from '~/utils/injectReducer';
import injectSaga from '~/utils/injectSaga';
import AuthModule from '~/modules/auth';
import AppModule from '~/modules/app';
import reducer from '~/modules/auth/redux/reducers';
import saga from '~/modules/auth/redux/saga';
import { makeSelectUserToken, makeSelectIndustryType } from '~/modules/auth/redux/selectors';
import { makeSelectPersistLoaded, makeSelectUserIndustryType, makeSelectUserAccessToken } from './redux/selectors';

class RootApp extends Component {
  renderApp = () => {
    const { accessToken, industryType } = this.props;
    return accessToken && industryType ? <AppModule/> : <AuthModule/>;
  }

  render() {
    const { apiKey, shopOrigin } = window;
    const { persistLoaded } = this.props;

    if (!persistLoaded) {
      return null;
    }

    return (
        <EmbeddedApp shopOrigin={shopOrigin} apiKey={apiKey}>
          <div className="main-app" style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center' }}>
            <Route path='/' render={this.renderApp} />
          </div>
        </EmbeddedApp>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  accessToken: makeSelectUserAccessToken(),
  industryType: makeSelectUserIndustryType(),
  persistLoaded: makeSelectPersistLoaded(),
})

const withReducer = injectReducer({key: 'token', reducer});
const withSaga = injectSaga({key: 'token', saga});
const withConnect = connect(mapStateToProps);

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(RootApp));
