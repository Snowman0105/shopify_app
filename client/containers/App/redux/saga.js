import fbLoginSaga from '~/components/FacebookLoginPage/redux/saga';

export default function* appSaga() {
  yield []
    .concat(fbLoginSaga);
}
