import {all, fork} from 'redux-saga/effects';
import {appSaga} from 'core/modules/app';
import {favouriteSaga} from 'core/modules/favourite';

function* rootSaga() {
  yield all([fork(appSaga), fork(favouriteSaga)]);
}

export default rootSaga;
