import { all } from 'redux-saga/effects';
import videosSaga from './videosSaga';
export const rootSaga = function*() {
  yield all([videosSaga()]);
};
