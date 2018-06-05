import { createSelector } from 'reselect';
const selectTrigger = (state) => state.get('app').get('triggers');

const makeSelectTagList = () => createSelector(
  selectTrigger,
  (tagState) => tagState.getIn(['tags', 'list']),
);

export {
  selectTrigger,
  makeSelectTagList,
};
