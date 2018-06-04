import { fork, call, put, takeLatest, select } from 'redux-saga/effects';
import request from '~/utils/request';
import history from '~/browserHistory';
import * as CONSTANTS from './constants';
import {
  userLoginSuccess,
  userLoginError,
  userIndustrySuccess,
  userIndustryError,
} from './actions';

export function* userLoginRequest(action) {
  try {
    const requestData = action.data;
    const data = yield call(request, 'userservices/login', 'POST', { ...requestData });
    yield put(userLoginSuccess(data));
    notify.success("login succeess");
  } catch (err) {
    yield put(userLoginError(err));
  }
}

export function* userIndustryRequest(action) {
  try {
    const industryType = action.data;
    const data = yield call(request, 'userservices/saveindustry', 'POST', {industryType}, true, true);
    yield put(userIndustrySuccess(data));
  } catch (err) {
    yield put(userIndustryError(err));
  }
}

export default function* authSaga() {
  yield takeLatest(CONSTANTS.USER_LOGIN_REQUEST, userLoginRequest);
  yield takeLatest(CONSTANTS.USER_INDUSTRY_REQUEST, userIndustryRequest);
}
