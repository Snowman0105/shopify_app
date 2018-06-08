import { createSelector } from 'reselect';
const selectTrigger = (state) => state.get('app').get('triggers');

const makeSelectTagList = () => createSelector(
  selectTrigger,
  (tagState) => tagState.getIn(['tags', 'list']),
);

const makeSelectMsgList = () => createSelector(
  selectTrigger,
  (msgState) => msgState.getIn(['messages', 'msgs']),
);

const makeSelectMsgListLoading = () => createSelector(
  selectTrigger,
  (msgState) => msgState.getIn(['messages', 'loading']),
);

const makeSelectMsg = () => createSelector(
  selectTrigger,
  (msgState) => msgState.getIn(['message', 'data']),
)

const makeSelectMsgLoading = () => createSelector(
  selectTrigger,
  (msgState) => msgState.getIn(['message', 'loading']),
)

export {
  selectTrigger,
  makeSelectTagList,
  makeSelectMsgList,
  makeSelectMsgListLoading,
  makeSelectMsg,
  makeSelectMsgLoading,
};
