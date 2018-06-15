import { fromJS } from 'immutable';
import * as CONSTANTS from './constants';

const newMessage = {
  trigger_name: '',
  message_schedule: '',
  message_content: ''
};

const initialState = fromJS({
  tags: {
    list: [],
    error: ''
  },
  messages: {
    msgs: [],
    loading: false
  },
  message: {
    id: '',
    data: {},
    error: [],
    loading: false
  },
  categories: {
    fbmsgtags: [],
    error: ''
  }
});

function tagReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.DRAG_DROP_TAGS_LIST_SUCCESS:
      return state.setIn(['tags', 'list'], fromJS(action.data));
    case CONSTANTS.DRAG_DROP_TAGS_LIST_ERROR:
      return state.setIn(['tags', 'error'], fromJS(action.data.error));
    case CONSTANTS.TRIGGER_ALL_MESSAGE_REQUEST:
      return state.setIn(['messages', 'loading'], true);
    case CONSTANTS.TRIGGER_ALL_MESSAGE_SUCCESS:
      return state
        .setIn(['messages', 'msgs'], fromJS(action.data))
        .setIn(['messages', 'loading'], false);
    case CONSTANTS.TRIGGER_ALL_MESSAGE_ERROR:
      return state.setIn(['messages', 'loading'], false);
    case CONSTANTS.LOAD_NEW_MESSAGE:
      return state.set(
        'message',
        fromJS({
          data: newMessage,
          id: 'new',
          error: [],
          loading: false
        })
      );
    case CONSTANTS.MESSAGE_LOAD_REQUEST:
      return state.setIn(['message', 'loading'], true);
    case CONSTANTS.MESSAGE_LOAD_SUCCESS:
      return state
        .setIn(['message', 'data'], fromJS(action.data))
        .setIn(['message', 'id'], action.data.id)
        .setIn(['message', 'loading'], false);
    case CONSTANTS.MESSAGE_LOAD_ERROR:
      return state.setIn(['message', 'loading'], false);
    case CONSTANTS.FACEBOOK_MSG_TAGS_SUCCESS:
      return state.setIn(['categories', 'fbmsgtags'], fromJS(action.data));
    case CONSTANTS.FACEBOOK_MSG_TAGS_ERROR:
      return state.setIn(['categories', 'error'], fromJS(action.data.error));
  }

  return state;
}

export default tagReducer;
