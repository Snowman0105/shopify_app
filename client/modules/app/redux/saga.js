import triggerSaga from '../triggers/redux/saga';

export default function* appSaga() {
  yield [].concat(triggerSaga);
}
