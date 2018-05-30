import * as CONSTANTS from './constants';

export function userLoginRequest(data) {
  return {
    type: CONSTANTS.USER_LOGIN_REQUEST,
    data,
  }
}

export function userLoginSuccess(data) {
  return {
    type: CONSTANTS.USER_LOGIN_SUCCESS,
    data,
  }
}

export function userLoginError(data) {
  return {
    type: CONSTANTS.USER_LOGIN_ERROR,
    ...data,
  }
}
