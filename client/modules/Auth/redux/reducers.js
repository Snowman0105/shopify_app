import { fromJS } from 'immutable';
import * as CONSTANTS from './constants';

const initalState = fromJS({
  userInfo: {
    accessToken: null,
    industryType: null,
    error: []
  }
});

function authReducer(state = initalState, action) {
  switch (action.type) {
    case CONSTANTS.USER_LOGIN_SUCCESS:
      return state.set(
        'userInfo',
        fromJS({
          accessToken: action.data.accessToken,
          industryType: action.data.industryType,
          error: []
        })
      );
    case CONSTANTS.USER_LOGIN_ERROR:
      return state.set('error', fromJS(action.data.error));
    case CONSTANTS.USER_INDUSTRY_SUCCESS:
      return state.set(
        'userInfo',
        fromJS({
          industryType: action.data.industryType
        })
      );
    case CONSTANTS.USER_INDUSTRY_ERROR:
      return state.set('error', fromJS(action.data.error));
    default:
  }
  return state;
}

export default authReducer;
