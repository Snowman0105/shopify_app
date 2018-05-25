import React, { Component} from 'react'
import { Route, Switch } from "react-router-dom";
import { Header, Container, Tab, List, Item } from 'semantic-ui-react';
import FacebookLogin from 'react-facebook-login';

class FBLoginPage extends Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <div className="facebook-login-page">
        <div className="sub-header">
          <p>Authorize TR!BE Messenger App on your Facebook Page Settings. <br /> It only takes a ming- check the video</p>
        </div>
        <div className="first-page">
          <FacebookLogin
            appId="217132752218567"
            autoLoad={true}
            size="medium"
            fields="name,email,picture"
            scope="public_profile,user_friends"
            textButton="Continue With Facebook"
            cssClass="fb-button-style"
            icon="fab fa-facebook-f"
            callback={this.responseFacebook} />
          </div>
      </div>
    );
  }
}

export default FBLoginPage;
