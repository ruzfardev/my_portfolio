import { all } from 'redux-saga/effects';
import { watchGetRequest } from './index';
export default function* rootSaga() {
  yield all([watchGetRequest()]);
}
