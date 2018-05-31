import { createSelector } from 'reselect';

const selectToken = (state) => state.get('token').get('userInfo');

const makeSelectUserToken = () => createSelector(
  selectToken,
  (tokenState) => tokenState.get('accessToken'),
);

const makeSelectIndustryType = () => createSelector(
  selectToken,
  (tokenState) => tokenState.get('industryType'),
);

export {
  selectToken,
  makeSelectUserToken,
  makeSelectIndustryType,
};
