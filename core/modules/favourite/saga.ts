import {all, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {ADD_FAVOURITE, GET_FAVOURITE, setFavourite} from './actions';
import {setFavouriteStore, getFavouriteStore} from 'utils/storage';
function* add(action) {
  try {
    const data = action.payload;
    const dataStore = yield getFavouriteStore();
    if (dataStore) setFavouriteStore([...dataStore, data]);
    else setFavouriteStore([data]);
    yield put(setFavourite([data]));
  } catch (error) {}
}
function* getData() {
  try {
    const data = yield getFavouriteStore();
    yield put(setFavourite(data));
  } catch (error) {}
}
export function* favouriteSaga() {
  yield all([
    takeEvery(ADD_FAVOURITE, add),
    takeLatest(GET_FAVOURITE, getData),
  ]);
}
