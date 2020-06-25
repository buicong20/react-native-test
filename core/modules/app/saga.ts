import {all, put, takeLatest, select, takeEvery} from 'redux-saga/effects';
import {GET_INFO, setInfo, FETCH} from './actions';
import {getInfo} from 'services/app';
function* fetchData() {
  try {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      const list = yield getInfo();
      arr = [...arr, list[0].user];
    }
    yield put(setInfo(arr));
  } catch (error) {
    yield put(setInfo([]));
  }
}
function* getInfoSaga(action) {
  try {
    const dataOld = yield select((state) => state.app.list);
    const list = yield getInfo();
    dataOld[action.payload] = list[0].user;
    yield put(setInfo(dataOld));
  } catch (error) {
    yield put(setInfo([]));
  }
}

export function* appSaga() {
  yield all([takeLatest(GET_INFO, getInfoSaga), takeLatest(FETCH, fetchData)]);
}
