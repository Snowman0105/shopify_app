/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const selectAuth = (state) => state.get('auth');

const selectToken = (state) => state.get('token');

const makeSelectCurrentUser = () => createSelector(
  selectAuth,
  (globalState) => globalState.get('currentUser')
);

const makeSelectUserAccessToken = () => createSelector(
  selectToken,
  (globalState) => globalState.get('userInfo').get('accessToken')
);

const makeSelectUserIndustryType = () => createSelector(
  selectToken,
  (globalState) => globalState.get('userInfo').get('industryType')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectPersistLoaded = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('persistLoaded')
);

const makeSelectNotification = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('notification')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);


export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectUserAccessToken,
  makeSelectUserIndustryType,
  makeSelectLoading,
  makeSelectNotification,
  makeSelectLocation,
  makeSelectPersistLoaded,
};
