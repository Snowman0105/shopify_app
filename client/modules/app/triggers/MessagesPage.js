import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  Table,
  Header,
  Container,
  Loader,
  Button,
  Radio,
  Tab,
  Modal,
  Grid,
  TextArea,
  Label,
  Input,
  Dimmer
} from 'semantic-ui-react';
import ContentEditable from 'react-contenteditable';
import AllMessagesPage from './AllMessagesPage';
import EditMessageModal from './EditMessageModal';
import {
  allTriggerMessagesRequest,
  getDragAndDropTagsRequest,
  messageSaveRequest,
  getFacebookTagsRequest
} from './redux/actions';
import {
  makeSelectTagList,
  makeSelectMsgListLoading,
  makeSelectFBMsgTagList
} from './redux/selectors';

class MessagesPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showModal: false,
      msgId: '',
      msgTemplate: ''
    };
    this.loaded = false;
  }

  componentWillMount() {
    this.props.allTriggerMessagesRequest();
    this.props.getDragAndDropTagsRequest();
    this.props.getFacebookTagsRequest();
  }

  onShowModal = id => () => {
    this.setState({ showModal: true, msgId: id });
  };

  onClose = () => {
    this.setState({ showModal: false, msgTemplate: '', msgId: '' });
  };

  render() {
    const { loading } = this.props;
    const panes = [
      {
        menuItem: 'All triggers',
        render: () => (
          <Tab.Pane>
            <Dimmer active={loading}>
              <Loader />
            </Dimmer>
            <AllMessagesPage onShowModal={this.onShowModal} />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Best performing',
        render: () => (
          <Tab.Pane>
            <h1>Best performing</h1>
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="message-trigger">
        <Button
          floated="right"
          onClick={this.onShowModal('new')}
          primary
          content="+ Create custom trigger"
        />
        <Header as="h2" content="Message triggers" />
        <Container>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Container>
        {this.state.msgId && (
          <EditMessageModal
            open={this.state.showModal}
            msgId={this.state.msgId}
            msgTemplate={this.state.msgTemplate}
            tags={this.props.tags}
            categories={this.props.categories}
            onClose={this.onClose}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTagList(),
  loading: makeSelectMsgListLoading(),
  categories: makeSelectFBMsgTagList()
});

const mapDispatchToProps = {
  allTriggerMessagesRequest,
  getDragAndDropTagsRequest,
  messageSaveRequest,
  getFacebookTagsRequest
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(MessagesPage);
