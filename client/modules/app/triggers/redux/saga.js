import {fork, call, put, takeLatest, select} from 'redux-saga/effects';
import request from '~/utils/request';
import history from '~/browserHistory';
import * as CONSTANTS from './constants';
import {
  getDragAndDropTagsSuccess,
  getDragAndDropTagsError,
} from './actions';

export function* getDragAndDropTagsRequest() {
  try {
    const data = yield call(request, 'tagservices/alltags', 'GET', null, true, true);
    yield put(getDragAndDropTagsSuccess(data));
  } catch (err) {
    yield push(getDragAndDropTagsError(err));
  }
}

export default [
  fork(takeLatest, CONSTANTS.DRAG_DROP_TAGS_LIST_REQUEST, getDragAndDropTagsRequest),
  fork(takeLatest, CONSTANTS.DRAG_DROP_TAGS_LIST_SUCCESS, getDragAndDropTagsSuccess),
  fork(takeLatest, CONSTANTS.DRAG_DROP_TAGS_LIST_ERROR, getDragAndDropTagsError),
];
