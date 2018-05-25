import React, { Component} from 'react'
import { Route, Switch } from "react-router-dom";
import { Header, Dropdown, Container, Tab, List, Item, Button, Icon } from 'semantic-ui-react';

class IndustryPage extends Component {
  render() {
    const industryOptions = [{
      key: 'bottle',
      value: 'bottle',
      text: 'bottle',
    }, {
      key: 'electoron',
      value: 'electron',
      text: 'Electron',
    }];
    return (
      <div className="choose-industry-page">
        <div className="sub-header">
          <p>Tell us what you sell, and we will activate the best- <br/> performing message triggers.</p>
        </div>
        <div className="first-page">
          <Dropdown
            placeholder="Please choose one..."
            fluid
            selection
            options={industryOptions}
            className="industry-list"
          />
        </div>
        &nbsp;
        <div className="first-page">
          <Button icon labelPosition='right' color="facebook">
            Next
            <Icon name='right arrow' />
          </Button>
        </div>
      </div>
    );
  }
}

export default IndustryPage;
