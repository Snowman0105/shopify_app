import * as CONSTANTS from './constants';

export function getDragAndDropTagsRequest() {
  return {
    type: CONSTANTS.DRAG_DROP_TAGS_LIST_REQUEST
  };
}

export function getDragAndDropTagsSuccess(data) {
  return {
    type: CONSTANTS.DRAG_DROP_TAGS_LIST_SUCCESS,
    data
  };
}

export function getDragAndDropTagsError(data) {
  return {
    type: CONSTANTS.DRAG_DROP_TAGS_LIST_ERROR,
    ...data
  };
}

export function allTriggerMessagesRequest() {
  return {
    type: CONSTANTS.TRIGGER_ALL_MESSAGE_REQUEST
  };
}

export function allTriggerMessagesSuccess(data) {
  return {
    type: CONSTANTS.TRIGGER_ALL_MESSAGE_SUCCESS,
    data
  };
}

export function allTriggerMessagesError(data) {
  return {
    type: CONSTANTS.TRIGGER_ALL_MESSAGE_ERROR,
    data
  };
}

export function messageSaveRequest(
  msgId,
  triggerName,
  messageSchedule,
  msgTemplate,
  category,
  eventTitle
) {
  const requestData = {
    msgId,
    triggerName,
    messageSchedule,
    msgTemplate,
    category,
    eventTitle
  };

  return {
    type: CONSTANTS.TRIGGER_MESSAGE_SAVE_REQUEST,
    requestData
  };
}

export function messageSaveSuccess(data) {
  return {
    type: CONSTANTS.TRIGGER_MESSAGE_SAVE_SUCCESS,
    data
  };
}

export function messageSaveError(data) {
  return {
    type: CONSTANTS.TRIGGER_MESSAGE_SAVE_ERROR,
    ...data
  };
}

export function loadNewMessage() {
  return {
    type: CONSTANTS.LOAD_NEW_MESSAGE
  };
}

export function msgLoadRequest(id) {
  return {
    type: CONSTANTS.MESSAGE_LOAD_REQUEST,
    id
  };
}

export function msgLoadSuccess(data) {
  return {
    type: CONSTANTS.MESSAGE_LOAD_SUCCESS,
    data
  };
}

export function msgLoadError(data) {
  return {
    type: CONSTANTS.MESSAGE_LOAD_ERROR,
    data
  };
}

export function makeSaveNotificaitonStatusRequest(msgId, status) {
  return {
    type: CONSTANTS.MESSAGE_NOTIFICATION_STATUS_REQUEST,
    msgId,
    status
  };
}

export function makeSaveNotificaitonStatusSuccess(data) {
  return {
    type: CONSTANTS.MESSAGE_NOTIFICATION_STATUS_SUCCESS,
    data
  };
}

export function makeSaveNotificaitonStatusError(data) {
  return {
    type: CONSTANTS.MESSAGE_NOTIFICATION_STATUS_ERROR,
    data
  };
}

export function deleteMsgRequest(msgId) {
  return {
    type: CONSTANTS.MESSAGE_DELETE_REQUEST,
    msgId
  };
}

export function deleteMsgSuccess(data) {
  return {
    type: CONSTANTS.MESSAGE_DELETE_SUCCESS,
    data
  };
}

export function deleteMsgError(data) {
  return {
    type: CONSTANTS.MESSAGE_DELETE_ERROR,
    data
  };
}

export function getFacebookTagsRequest() {
  return {
    type: CONSTANTS.FACEBOOK_MSG_TAGS_REQUEST
  };
}

export function getFacebookTagsSuccess(data) {
  return {
    type: CONSTANTS.FACEBOOK_MSG_TAGS_SUCCESS,
    data
  };
}

export function getFacebookTagsError(error) {
  return {
    type: CONSTANTS.FACEBOOK_MSG_TAGS_ERROR,
    error
  };
}

export function getWebhookEventsRequest() {
  return {
    type: CONSTANTS.WEBHOOK_EVENTS_REQUEST
  };
}

export function getWebhookEventsSuccess(data) {
  return {
    type: CONSTANTS.WEBHOOK_EVENTS_SUCCESS,
    data
  };
}

export function getWebhookEventsError(err) {
  return {
    type: CONSTANTS.WEBHOOK_EVENTS_ERROR,
    err
  };
}
