import React, { Component} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  Table, Header, Container, Dimmer, Loader, Button,
  Confirm, Radio, Input, Tab, List, Grid, Item, Checkbox
} from 'semantic-ui-react';
import { makeSelectMsgList } from '../redux/selectors';
import { makeSaveNotificaitonStatusRequest, deleteMsgRequest } from '../redux/actions';

class AllMessagesPage extends Component {
  constructor(props) {
    super(props);
  }

  notificationSwitch = (msgId) => (event, data) => {
    this.props.makeSaveNotificaitonStatus(msgId, data.checked);
  }

  onDelete = (msgId) => () => {
    this.props.deleteMsgRequest(msgId);
  }

  renderMessages = () => {

    const { msgs } = this.props;
    if (!msgs.size) {
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan="5">
              No Messages
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    }

    const rows = msgs.map((msg) => (
      <Table.Row key={msg.get('id')}>
        <Table.Cell>
          { msg.get('msg_notification') == true
            ? <Checkbox onChange={this.notificationSwitch(msg.get('id'))} checked toggle />
            : <Checkbox onChange={this.notificationSwitch(msg.get('id'))} toggle />
          }
        </Table.Cell>
        <Table.Cell>
          <Link to='#' onClick={this.props.onShowModal(msg.get('id'))}>
            {msg.get('trigger_name')}
          </Link>
        </Table.Cell>
        <Table.Cell>
          {msg.get('message_schedule')}
        </Table.Cell>
        <Table.Cell>
          0
        </Table.Cell>
        <Table.Cell>
          0
        </Table.Cell>
        <Table.Cell>
          <Button icon='delete' color='red' onClick={this.onDelete(msg.get('id'))}></Button>
        </Table.Cell>
      </Table.Row>
    ));

    return (
      <Table.Body>
        {rows}
      </Table.Body>
    );
  }

  render() {
    return(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Trigger name</Table.HeaderCell>
            <Table.HeaderCell>Message schedule</Table.HeaderCell>
            <Table.HeaderCell>Time run</Table.HeaderCell>
            <Table.HeaderCell>In queue</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.renderMessages()}
        <Table.Footer>
        </Table.Footer>
      </Table>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  msgs: makeSelectMsgList(),
});

const mapDispatchToProps = {
  makeSaveNotificaitonStatus: makeSaveNotificaitonStatusRequest,
  deleteMsgRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllMessagesPage);
