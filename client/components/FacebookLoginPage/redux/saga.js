import { fork, call, put, takeLatest, select } from 'redux-saga/effects';
import request from '~/utils/request';
import history from '~/browserHistory';
import * as CONSTANTS from './constants';
import {
  userLoginSuccess,
  userLoginError
} from './actions';

export function* userLoginRequest(action) {
  try {
    const requestData = action.data;
    const data = yield call(request, 'userservices/login', 'POST', {requestData});
    console.log(data);
    yield put(userLoginSuccess(data));
    notify.success("login succeess");
  } catch (err) {
    yield put(userLoginError(err));
  }
}

export default [
  fork(takeLatest, CONSTANTS.USER_LOGIN_REQUEST, userLoginRequest),
];
