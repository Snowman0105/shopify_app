import { combineReducers } from 'redux-immutable';
import triggerSaga from '../triggers/redux/reducers';

const appReducer = combineReducers({
  triggers: triggerSaga,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
