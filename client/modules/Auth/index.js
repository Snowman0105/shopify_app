import React, { Component} from 'react'
import { Route, Switch } from "react-router-dom";
import { Header, Container, Tab, List, Item } from 'semantic-ui-react';
import FBButton from '../../components/FacebookLoginButton';

class LoginPage extends Component {
  render() {
    const panes = [
      { menuItem: '1. Connect to your facebook page', render: () => <Tab.Pane><FBButton/></Tab.Pane>  },
      { menuItem: '2. Choose your industry', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    ];
    return (
      <div className="auth-app">
        <Header size='huge' textAlign='center'>TR!BE FB Messenger Setup</Header>
        <Container>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Container>
      </div>
    );
  }
}

export default LoginPage;
