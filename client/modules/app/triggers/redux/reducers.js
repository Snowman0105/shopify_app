import { fromJS } from 'immutable';
import * as CONSTANTS from './constants';

const initialState = fromJS({
  tags: {
    list: [],
    error: '',
  }
});

function tagReducer(state = initialState, action) {
  switch(action.type) {
    case CONSTANTS.DRAG_DROP_TAGS_LIST_SUCCESS:
      return state.setIn(['tags', 'list'], fromJS(action.data));
    case CONSTANTS.DRAG_DROP_TAGS_LIST_ERROR:
      return state.setIn(['tags', 'error'], fromJS(action.data.error));
  }

  return state;
}

export default tagReducer;
