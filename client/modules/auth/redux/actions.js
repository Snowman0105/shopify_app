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

export function userIndustryRequest(data) {
  return {
    type: CONSTANTS.USER_INDUSTRY_REQUEST,
    data,
  }
}

export function userIndustrySuccess(data) {
  return {
    type: CONSTANTS.USER_INDUSTRY_SUCCESS,
    data,
  }
}

export function userIndustryError(data) {
  return {
    type: CONSTANTS.USER_INDUSTRY_ERROR,
    ...data,
  }
}
