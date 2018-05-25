import React, { Component} from 'react';
import { Page } from '@shopify/polaris';
import { Route, Switch } from "react-router-dom";
import { EmbeddedApp } from '@shopify/polaris/embedded';
import LoginPage from './Auth';

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

export default App;
