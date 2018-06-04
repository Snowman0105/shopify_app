import React, { Component} from 'react'
import { Route, Switch, Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Header, Dropdown, Container, Tab, List, Item, Button, Icon } from 'semantic-ui-react';
import { userIndustryRequest } from '../redux/actions';

class IndustryPage extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      industry: '',
    };
  }

  onUpdateDropdown = (field) => (evt, data) => {
    if (field === 'industry') {
      this.setState({industry: data.value});
    }
  }

  onNext = () => {
    this.props.userIndustryRequest(this.state.industry);
  }

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
            onChange={this.onUpdateDropdown('industry')}
          />
        </div>
        &nbsp;
        <div className="first-page">
          <Button icon labelPosition='right' color="facebook" onClick={this.onNext}>
            Next
            <Icon name='right arrow' />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({

});

const mapDispatchToProps = {
  userIndustryRequest,
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(IndustryPage);
