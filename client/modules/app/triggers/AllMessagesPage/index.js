import React, { Component} from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Header, Container, Dimmer, Loader, Button, Confirm, Radio, Input, Tab, List, Grid, Item } from 'semantic-ui-react';

class AllMessagesPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Trigger name</Table.HeaderCell>
              <Table.HeaderCell>Message schedule</Table.HeaderCell>
              <Table.HeaderCell>Time run</Table.HeaderCell>
              <Table.HeaderCell>In queue</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          </Table.Body>
          <Table.Footer>

          </Table.Footer>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllMessagesPage);
