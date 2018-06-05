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
  TextArea
} from 'semantic-ui-react';
import AllMessagesPage from './AllMessagesPage';
import { FroalaEditor } from 'react-froala-wysiwyg';
import { getDragAndDropTagsRequest } from './redux/actions';
import { makeSelectTagList } from './redux/selectors';

class MessagesPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showModal: false,
    };
  }

  componentWillMount() {
    this.props.getDragAndDropTagsRequest();
  }

  onShowModal = () => {
    this.setState({ showModal: true });
  }

  onClose = () => {
    this.setState({ showModal: false });
  }

  dragStart = (event) => {
    event.dataTransfer.setData('Text', event.target.innerHTML);
  }

  dragDropTagsButton = (tagLists) => {
    return tagLists.map((tag) => (
      <Button key={tag.get('id')} draggable='true' basic color='black' className="tag-button" onDragStart={this.dragStart}>
        {tag.get('tag_name')}
      </Button>
    ));
  }

  renderTriggerModal = () => {
    const { showModal } = this.state;
    const { tags } = this.props;

    const style = {
      'background': '#efefef',
      'border': 'none',
      'borderRadius': '8px',
      'width': '50%',
      'height': '60px',
      'color': 'black',
      'marginTop': '30px',
      'marginBottom': '30px'
    };

    return (
      <Modal size="small" open={showModal} onClose={this.onClose} className="msg-trigger-modal" closeIcon>
        <Modal.Header>
          Create new custom trigger
        </Modal.Header>
        <Modal.Content className="msg-modal-content">
          <Grid>
            <Grid.Row className="message-box-container">
              <Grid.Column width={16} className="message-div-first">
                <Header as='h3' className="message-header-content-first">Your message to customer</Header>
                <Header as='h4' className="message-header-content-second">Preview and customize the triggered message below</Header>
              </Grid.Column>
              <Grid.Column width={16} className="message-div-second">
                <TextArea className="message-content" autoHeight style={style} placeholder='Edit message template' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as='h6'>ADD MORE TAGS(DRAG AND DROP TO YOUR MESSAGE)</Header>
          { showModal &&
            this.dragDropTagsButton(tags)
          }
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='black' onClick={this.onClose} > Cancel </Button>
          <Button color='facebook' icon='checkmark' labelPosition='right' content='Save' />
        </Modal.Actions>
      </Modal>
    );
  }

  render() {
    const panes = [
      { menuItem: 'All triggers', render:() => <Tab.Pane> <AllMessagesPage /> </Tab.Pane> },
      { menuItem: 'Best performing', render:() => <Tab.Pane><h1>Best performing</h1></Tab.Pane> },
    ];
    return(
      <div className="message-trigger">
        <Button floated="right" onClick={this.onShowModal} primary content='+ Create custom trigger' />
        <Header as='h2' content='Message triggers' />
        <Container>
          <Tab menu={{secondary: true, pointing: true}} panes={panes} />
        </Container>
        { this.renderTriggerModal() }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTagList(),
});

const mapDispatchToProps = {
  getDragAndDropTagsRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(MessagesPage);
