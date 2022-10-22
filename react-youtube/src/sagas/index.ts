import { all } from 'redux-saga/effects';
import videosSaga from './videosSaga';
import searchSaga from './searchSaga';
export const rootSaga = function*() {
  yield all([videosSaga(), searchSaga()]);
};
