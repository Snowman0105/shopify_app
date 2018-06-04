import React, { Component} from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Header, Container, Tab, List, Item } from 'semantic-ui-react';
import FacebookLogin from 'react-facebook-login';
import { userLoginRequest } from '../redux/actions';

class FBLoginPage extends Component {
  constructor(props) {
    super(props);

    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(fbUserInfo) {
    const composedInfo = { ...fbUserInfo, access_token: fbUserInfo.accessToken };
    delete composedInfo.accessToken;
    this.props.userLoginRequest(composedInfo);
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
            autoLoad={false}
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

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  userLoginRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FBLoginPage);
