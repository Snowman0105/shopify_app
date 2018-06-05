import * as CONSTANTS from './constants';

export function getDragAndDropTagsRequest() {
  return {
    type: CONSTANTS.DRAG_DROP_TAGS_LIST_REQUEST,
  }
}

export function getDragAndDropTagsSuccess(data) {
  return {
    type: CONSTANTS.DRAG_DROP_TAGS_LIST_SUCCESS,
    data,
  }
}

export function getDragAndDropTagsError(data) {
  return {
    type: CONSTANTS.DRAG_DROP_TAGS_LIST_ERROR,
    ...data,
  }
}
