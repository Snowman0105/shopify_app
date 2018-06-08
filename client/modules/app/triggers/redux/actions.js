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

export function allTriggerMessagesRequest() {
  return {
    type: CONSTANTS.TRIGGER_ALL_MESSAGE_REQUEST,
  }
}

export function allTriggerMessagesSuccess(data) {
  return {
    type: CONSTANTS.TRIGGER_ALL_MESSAGE_SUCCESS,
    data,
  }
}

export function allTriggerMessagesError(data) {
  return {
    type: CONSTANTS.TRIGGER_ALL_MESSAGE_ERROR,
    data,
  }
}

export function messageSaveRequest(msgId, triggerName, messageSchedule, msgTemplate) {
  const requestData = {
    msgId,
    triggerName,
    messageSchedule,
    msgTemplate
  };

  return {
    type: CONSTANTS.TRIGGER_MESSAGE_SAVE_REQUEST,
    requestData,
  };
}

export function messageSaveSuccess(data) {
  return {
    type: CONSTANTS.TRIGGER_MESSAGE_SAVE_SUCCESS,
    data,
  };
}

export function messageSaveError(data) {
  return {
    type: CONSTANTS.TRIGGER_MESSAGE_SAVE_ERROR,
    ...data,
  };
}

export function loadNewMessage() {
  return {
    type: CONSTANTS.LOAD_NEW_MESSAGE,
  };
}

export function msgLoadRequest(id) {
  return {
    type: CONSTANTS.MESSAGE_LOAD_REQUEST,
    id,
  };
}

export function msgLoadSuccess(data) {
  return {
    type: CONSTANTS.MESSAGE_LOAD_SUCCESS,
    data,
  };
}

export function msgLoadError(data) {
  return {
    type: CONSTANTS.MESSAGE_LOAD_ERROR,
    data,
  };
}
